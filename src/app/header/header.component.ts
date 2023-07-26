import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isConnectedAsUser = false;
  isConnectedAsAgent = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.updateConnectionStatus();
  }

  updateConnectionStatus(): void {
    this.isConnectedAsUser = this.authService.isConnectedUser();
    this.isConnectedAsAgent = this.authService.isConnectedAgent();
  }

  connectAsUser(): void {
    this.authService.isConnectedAsUser=true;
    this.authService.isConnectedAsAgent=false;
    this.updateConnectionStatus();
    this.router.navigate(['/login-user']);

  }

  connectAsAgent(): void {
    this.authService.isConnectedAsUser=false;
    this.authService.isConnectedAsAgent=true;
    this.updateConnectionStatus();
    this.router.navigate(['/login-agent']);
  }
}