import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

import { User } from './models/user.interface';

const USER_API: string = environment.apiUrl;

@Injectable()
export class UserRegistrationService {

  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post(`${USER_API}/useraccountinfos`, user);
  }

}
