import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  constructor(private router: Router){}
  loginUser(){
    this.router.navigate(['/new-request']);
  }


}
