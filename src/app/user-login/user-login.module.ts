import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginService } from './user-login.service';
import { AuthService } from './auth.service';

import { LoginComponent } from './containers/login/login.component';
import { LoginDetailsComponent } from './components/login-details/login-details.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule } from '../../../node_modules/@angular/material';
import { MatInputModule } from '@angular/material/input';

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
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  declarations: [
    LoginComponent,
    LoginDetailsComponent
  ],
  providers: [
    UserLoginService,
    AuthService
  ]
})
export class UserLoginModule { }
