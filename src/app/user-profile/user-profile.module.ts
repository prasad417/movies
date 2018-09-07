import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegistrationService } from '../user-registration/user-registration.service';
import { ProfileComponent } from './containers/profile/profile.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { MatButtonModule, MatDatepickerModule, MatNativeDateModule} from '../../../node_modules/@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {
      path: 'account',
      component: ProfileComponent
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
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [
    ProfileComponent,
    ProfileDetailsComponent
  ],
  providers: [
    UserRegistrationService
  ]
})
export class UserProfileModule { }
