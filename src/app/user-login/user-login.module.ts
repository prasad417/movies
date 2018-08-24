import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginService } from './user-login.service';

import { LoginComponent } from './containers/login/login.component';
import { LoginDetailsComponent } from './components/login-details/login-details.component';

const routes: Routes = [
  {
      path: 'login',
      component: LoginComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    LoginComponent,
    LoginDetailsComponent
  ],
  providers: [
    UserLoginService
  ]
})
export class UserLoginModule { }
