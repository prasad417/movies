import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { AuthService } from './../user-login/auth.service';

import { environment } from '../../environments/environment.prod';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Language } from './models/language.interface';

const LANGUAGE_API: string = environment.apiUrl;

@Injectable()
export class LanguageService {

  constructor(private http: HttpClient, private authService: AuthService) {}
    private accessToken = this.authService.getToken();
    getLanguages(): Observable<Language[]> {
      return this.http
        .get<Language[]>(`${LANGUAGE_API}/languages?access_token=${this.accessToken}`)
        .pipe(
        map((response: Response) => response), catchError(this.errorHandler));
    }

    errorHandler(error: HttpErrorResponse) {
      return Observable.throw(error.message || 'Server Error');
    }

}
