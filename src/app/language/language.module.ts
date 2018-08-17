import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

// Containers
import { LanguageComponent } from './containers/language/language.component';

// Components
import { LanguageDetailsComponent } from './components/language-details/language-details.component';

// Service
import { LanguageService } from './language.service';
import { MatListModule } from '../../../node_modules/@angular/material';

const routes: Routes = [
  {
      path: 'movies',
      component: LanguageComponent
  },
  {
      path: 'music',
      component: LanguageComponent
  },
  {
      path: 'videos',
      component: LanguageComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatListModule
  ],
  declarations: [
    LanguageComponent,
    LanguageDetailsComponent
  ],
  providers: [
    LanguageService
  ]
})
export class LanguageModule { }
