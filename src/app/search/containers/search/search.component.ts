import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { Movie } from './../../../movie/models/movie.interface';
import { MovieService } from './../../../movie/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  movies: Movie[] = [];
  queryField: FormControl = new FormControl('');

  constructor(private movieService: MovieService) { }

  ngOnInit() {
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
