import { Component } from '@angular/core';
import { RequestService } from 'src/app/service/request-service';
import { Request } from '../model/request.model';

@Component({
  selector: 'app-manage-requests',
  templateUrl: './manage-requests.component.html',
  styleUrls: ['./manage-requests.component.css']
})
export class ManageRequestsComponent {
  requests: Request[] = []
  selectedRequest: Request | null = null; 
  replyMessage: string = ''; 
  filteredRequests: Request[] = [];
  searchFullName: string = '';
  unrepliedRequestsCount: number = 0;


  constructor(private requestService: RequestService) {}

  filterRequests() {
    this.filteredRequests = this.requests.filter((request) =>
      request.fullName.toLowerCase().includes(this.searchFullName.toLowerCase())
    );
    this.calculateUnrepliedRequestsCount();
  }
  onFilterNotReplied() {
      this.filteredRequests = this.filteredRequests.filter((request) => !request.isReplied);
      this.calculateUnrepliedRequestsCount();
  }

  calculateUnrepliedRequestsCount() {
    this.unrepliedRequestsCount = this.filteredRequests.filter((request) => !request.isReplied).length;
  }

  onSearch() {
    
    this.filterRequests(); 
  }
 

  ngOnInit(): void {
    this.loadRequests();
  }
  loadRequests(): void {
    this.requestService.getAll().subscribe(
      (requests) => {
        this.requests = requests;
        this.filteredRequests=requests;
        this.calculateUnrepliedRequestsCount();
      },
      (error) => {
        console.error('Error fetching requests:', error);
      }
    );
  }

  onReplyClick(request: Request): void {
    this.selectedRequest = request;
    this.replyMessage = '';
  }

  onSubmitReply(): void {
    if (this.selectedRequest) {
      console.log('Reply for Request ID:', this.selectedRequest._id, ' - Message:', this.replyMessage);
      this.requestService.updateRequest(this.selectedRequest._id, this.replyMessage, true)
        .subscribe(
          (response) => {
            console.log('Request updated successfully:', response);
            this.loadRequests();
          },
          (error) => {
            console.error('Error updating request:', error);
          }
        );
    }
  }

  onCancelReply(): void {
    this.selectedRequest = null;
  }
}
