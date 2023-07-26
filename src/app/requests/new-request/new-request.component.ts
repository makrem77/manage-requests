import { Component } from '@angular/core';
import { Request } from '../model/request.model';
import { RequestService } from 'src/app/service/request-service';
import {  Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css'],
})
export class NewRequestComponent {
  constructor(private requestService: RequestService, private router: Router) {}

  request: Request = {
    _id: '',
    fullName: '',
    email: '',
    description: '',
    requestType: '',
    date: '',
    reply: 'not replied yet',
    isReplied: false,
  };
  requestTypes = [
    { label: 'RECLAMATION', value: 'RECLAMATION' },
    { label: 'AUTRE', value: 'AUTRE' },
  ];
  items: MenuItem[] = [
    {
      label: 'Effectuer une demande',
      icon: 'pi pi-fw pi-plus',
      routerLink: ['/new-request'],
    },
    {
      label: 'Suivre mes demandes',
      icon: 'pi pi-fw pi-trash',
      routerLink: ['/request-list'],
    },
  ];

  saveRequest() {
    const date = new Date();

    const localDateString = date.toLocaleDateString(undefined, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    const localTimeString = date.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });

    const localDateTimeString = `${localDateString} ${localTimeString}`;
    this.request.date = localDateTimeString;
    this.requestService.save(this.request).subscribe((response) => {
      this.router.navigate(['/request-list']);
    });
  }
}
