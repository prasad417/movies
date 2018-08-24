import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { LanguageModule } from './language/language.module';
import { ArtistModule } from './artist/artist.module';
import { MovieModule } from './movie/movie.module';
import { SearchModule } from './search/search.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { BackgroundComponent } from './background/background.component';
import { RegistrationDetailsComponent } from './user-registration/components/registration-details/registration-details.component';
import { RegistrationComponent } from './user-registration/containers/registration/registration.component';
import { LoginDetailsComponent } from './user-login/components/login-details/login-details.component';
import { LoginComponent } from './user-login/containers/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    BackgroundComponent,
    RegistrationDetailsComponent,
    RegistrationComponent,
    LoginDetailsComponent,
    LoginComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    // Custom modules
    LanguageModule,
    ArtistModule,
    MovieModule,
    SearchModule,
    // Routing modules
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
