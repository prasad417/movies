import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './user-registration/containers/registration/registration.component';
import { LoginComponent } from './user-login/containers/login/login.component';


const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'registration', component: RegistrationComponent, pathMatch: 'full'},
    {path: 'login', component: LoginComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
