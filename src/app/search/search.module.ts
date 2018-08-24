import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '../../../node_modules/@angular/material';

// Containers
import { SearchComponent } from './containers/search/search.component';

// Components
import { SearchDetailsComponent } from './components/search-details/search-details.component';

// Service
import { MovieService } from '../movie/movie.service';

const routes: Routes = [
  {
      path: 'search',
      component: SearchComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatCardModule
  ],
  declarations: [
    SearchComponent,
    SearchDetailsComponent
  ],
  providers: [
    MovieService
  ]
})
export class SearchModule { }
