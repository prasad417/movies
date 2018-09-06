import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Movie } from './../../models/movie.interface';
import { User } from '../../../user-registration/models/user.interface';

import { MovieService } from './../../movie.service';
import { AuthService } from './../../../user-login/auth.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movies: Movie[];
  user: User;
  id: number;

  public errorMsg;

  constructor(private _Activatedroute: ActivatedRoute, private _router: Router, private movieService: MovieService,
    private authService: AuthService) { }


  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    if (this.user === null) {
      this._router.navigate(['/login']);
    } else {
      this.id = this._Activatedroute.snapshot.params['id'];
      this.movieService
        .getMovies(this.id)
        .subscribe((data: Movie[]) => this.movies = data.sort(
          (a: Movie, b: Movie) => (a.movieName < b.movieName ? -1 : 1)
        ));
        // (error: any) => this.errorMsg = error);
    }
  }

}
