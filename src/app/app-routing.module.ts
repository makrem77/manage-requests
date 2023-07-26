import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRequestComponent } from './requests/new-request/new-request.component';
import { RequestListComponent } from './requests/request-list/request-list.component';
import { LoginUserComponent } from './auth/login-user/login-user.component';
import { LoginAgentComponent } from './auth/login-agent/login-agent.component';
import { ManageRequestsComponent } from './requests/manage-requests/manage-requests.component';

const routes: Routes = [
  { path: 'new-request', component:NewRequestComponent},
  { path: 'request-list', component:RequestListComponent},
  { path: 'login-user', component: LoginUserComponent },
  { path: 'login-agent', component: LoginAgentComponent },
  { path: 'manage-requests', component: ManageRequestsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
