import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

const USER_API: string = environment.apiUrl;

@Injectable()
export class UserLoginService {

  headers = new HttpHeaders({
    'Content-Type' : 'application/json',
  });
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${USER_API}/useraccount/login?include=User`, { email: username, password: password }, {headers: this.headers})
            .pipe(
              map((response: Response) => response),
              catchError(this.errorHandler)
            );
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error');
  }

}
