import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { UserRegistrationService } from './user-registration.service';

import { RegistrationComponent } from './containers/registration/registration.component';
import { RegistrationDetailsComponent } from './components/registration-details/registration-details.component';
import { MatSelectModule } from '../../../node_modules/@angular/material';

const routes: Routes = [
  {
      path: 'registration',
      component: RegistrationComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatSelectModule
  ],
  declarations: [
    RegistrationComponent,
    RegistrationDetailsComponent
  ],
  providers: [
    UserRegistrationService
  ]
})
export class UserRegistrationModule { }
