import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { LanguageModule } from './language/language.module';

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
import { ArtistDetailsComponent } from './artist/components/artist-details/artist-details.component';
import { ArtistComponent } from './artist/containers/artist/artist.component';
import { MovieComponent } from './movie/containers/movie/movie.component';
import { MovieDetailsComponent } from './movie/components/movie-details/movie-details.component';
import { SearchDetailsComponent } from './search/components/search-details/search-details.component';
import { SearchComponent } from './search/containers/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    BackgroundComponent,
    RegistrationDetailsComponent,
    RegistrationComponent,
    LoginDetailsComponent,
    LoginComponent,
    ArtistDetailsComponent,
    ArtistComponent,
    MovieComponent,
    MovieDetailsComponent,
    SearchDetailsComponent,
    SearchComponent
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
    // Routing modules
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
