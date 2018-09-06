import {Injectable} from '@angular/core';
import { User } from '../user-registration/models/user.interface';
import { isNullOrUndefined } from 'util';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {

  public onAuthChange$: Subject<User>;
  constructor() {
    this.onAuthChange$ = new Subject();
  }

  setUser(user: User) {
    this.onAuthChange$.next(user);
    const userString = JSON.stringify(user);
    localStorage.setItem('currentUser', userString);
  }

  getCurrentUser(): User {
    const userString = localStorage.getItem('currentUser');
    if (!isNullOrUndefined(userString)) {
      const user: User = JSON.parse(userString);
      return user;
    } else {
      return null;
    }
  }

  setToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  getToken(): string {
    return localStorage.getItem('accessToken');
  }

  logout() {
    this.onAuthChange$.next(null);
    // we need also request logout to the server api
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
  }

}
