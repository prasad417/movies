import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '../../../node_modules/@angular/material';

// Containers
import { ArtistComponent } from './containers/artist/artist.component';

// Components
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';

// Service
import { ArtistService } from './artist.service';

const routes: Routes = [
    {
        path: 'artists/:id',
        component: ArtistComponent,
        pathMatch: 'full'
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
    ArtistComponent,
    ArtistDetailsComponent
  ],
  providers: [
    ArtistService
  ]
})
export class ArtistModule { }
