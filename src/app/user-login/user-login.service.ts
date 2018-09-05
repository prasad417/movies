import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

import { map, catchError } from 'rxjs/operators';

const USER_API: string = environment.apiUrl;

@Injectable()
export class UserLoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    this.http.post<any>(`${USER_API}/Users/login`, { username: username, password: password })
      .pipe(
        map(user => {
          console.log(user);
          // login successful if there's a token in the response
          if (user && user.token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
          }
          return user;
        })
      );
  }

}
