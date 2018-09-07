import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { LanguageModule } from './language/language.module';
import { ArtistModule } from './artist/artist.module';
import { MovieModule } from './movie/movie.module';
import { SearchModule } from './search/search.module';
import { UserRegistrationModule } from './user-registration/user-registration.module';
import { UserLoginModule } from './user-login/user-login.module';
import { UserProfileModule } from './user-profile/user-profile.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { BackgroundComponent } from './background/background.component';
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    BackgroundComponent
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
    NgHttpLoaderModule,
    // Custom modules
    LanguageModule,
    ArtistModule,
    MovieModule,
    SearchModule,
    UserRegistrationModule,
    UserLoginModule,
    UserProfileModule,
    // Routing modules
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
