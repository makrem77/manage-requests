import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class AuthService {
  public isConnectedAsUser = false;
  public isConnectedAsAgent = false; 

  isConnectedUser(): boolean {
    return this.isConnectedAsUser;
  }

  isConnectedAgent(): boolean {
    return this.isConnectedAsAgent;
  }
}
