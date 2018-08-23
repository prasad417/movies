import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '../../../node_modules/@angular/material';

// Containers
import { MovieComponent } from './containers/movie/movie.component';

// Components
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

// Service
import { MovieService } from './movie.service';

const routes: Routes = [
    {
        path: 'artistmovies/:id',
        component: MovieComponent
    }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatCardModule
  ],
  declarations: [
    MovieDetailsComponent,
    MovieComponent
  ],
  providers: [
    MovieService
  ]
})
export class MovieModule { }
