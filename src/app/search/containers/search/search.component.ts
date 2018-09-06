import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { Movie } from './../../../movie/models/movie.interface';
import { User } from '../../../user-registration/models/user.interface';

import { MovieService } from './../../../movie/movie.service';
import { AuthService } from './../../../user-login/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  movies: Movie[] = [];
  user: User;
  queryField: FormControl = new FormControl('');

  constructor(private movieService: MovieService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    if (this.user === null) {
      this.router.navigate(['/login']);
    } else {
      this.queryField.valueChanges
        .pipe(
          debounceTime(200),
          distinctUntilChanged()
        )
        .subscribe( queryField => this.movieService.search(queryField)
        .subscribe( (data: Movie[]) => this.movies = data.sort(
           (a: Movie, b: Movie) => (a.movieName < b.movieName ? -1 : 1)
        )));
    }
  }

}
