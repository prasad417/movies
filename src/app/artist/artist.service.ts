import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { AuthService } from './../user-login/auth.service';

import { environment } from '../../environments/environment.prod';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Artist } from './models/artist.interface';

const Artists_API: string = environment.apiUrl;

@Injectable()
export class ArtistService {

  constructor(private http: HttpClient, private authService: AuthService) {}
    private accessToken = this.authService.getToken();
    getArtists(id: number): Observable<Artist[]> {
        return this.http
            .get<Artist[]>(`${Artists_API}/languages/${id}/artists?access_token=${this.accessToken}`)
            .pipe(
                map((response: Response) => response),
                catchError(this.errorHandler)
            );
    }

      errorHandler(error: HttpErrorResponse) {
          return Observable.throw(error.message || 'Server Error');
      }

}
