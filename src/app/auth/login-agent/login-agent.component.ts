import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-agent',
  templateUrl: './login-agent.component.html',
  styleUrls: ['./login-agent.component.css']
})
export class LoginAgentComponent {
  constructor(private router: Router){}
  loginAgent(){
    this.router.navigate(['/manage-requests']);
  }

}
