import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request-service';
import { Request } from '../model/request.model';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  selectedRequest: Request | null = null; 
  requests: Request[] = []
  constructor(private requestService: RequestService) {}
  items: MenuItem[] =[
    {
        label: 'Effectuer une demande',
        icon: 'pi pi-fw pi-plus',
        routerLink: ['/new-request']
    },
    {
        label: 'Suivre mes demandes',
        icon: 'pi pi-fw pi-trash',
        routerLink: ['/request-list']

    }
];

  ngOnInit(): void {
    this.loadRequests();
  }
  loadRequests(): void {
    this.requestService.getAll().subscribe(
      (requests) => {
        this.requests = requests;
      },
      (error) => {
        console.error('Error fetching requests:', error);
      }
    );
  }
  onDeleteRequest(requestId: string): void {
    const isConfirmed = window.confirm('Are you sure you want to delete this request?');

    if (isConfirmed) {
    this.requestService.delete(requestId).subscribe(
      () => {
        console.log('Request deleted successfully');
        this.loadRequests();
      },
      (error) => {
        console.error('Error deleting the request:', error);
      }
    );
  }
}

onShowReplyClick(request: Request): void {
  if (this.selectedRequest !== null) {
    this.selectedRequest = null;
  }
  else {
    this.selectedRequest = request;
  }
  
}
}
