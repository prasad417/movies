import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { Artist } from './../../models/artist.interface';

import { ArtistService } from '../../artist.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  artists: Artist[];
  id: number;

  public errorMsg;

  constructor(private _Activatedroute: ActivatedRoute, private _router: Router, private artistService: ArtistService) { }

  ngOnInit() {
    this.id = this._Activatedroute.snapshot.params['id'];
    this.artistService
      .getArtists(this.id)
      .subscribe((data: Artist[]) => this.artists = data.sort(
        (a: Artist, b: Artist) => (a.artistName < b.artistName ? -1 : 1)
      ));
      // (error: any) => this.errorMsg = error);
  }

}
