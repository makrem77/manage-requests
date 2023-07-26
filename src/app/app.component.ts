import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
  }
}
