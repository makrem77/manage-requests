import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { MenuModule } from 'primeng/menu';
import { NewRequestComponent } from './requests/new-request/new-request.component';
import { RequestListComponent } from './requests/request-list/request-list.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { HeaderComponent } from './header/header.component';
import { ToolbarModule } from 'primeng/toolbar';
import { LoginUserComponent } from './auth/login-user/login-user.component';
import { LoginAgentComponent } from './auth/login-agent/login-agent.component';
import { ManageRequestsComponent } from './requests/manage-requests/manage-requests.component';
import { InputTextareaModule } from 'primeng/inputtextarea';




@NgModule({
  declarations: [
    AppComponent,
    NewRequestComponent,
    RequestListComponent,
    HeaderComponent,
    LoginUserComponent,
    LoginAgentComponent,
    ManageRequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MenuModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    ToolbarModule,
    InputTextareaModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
