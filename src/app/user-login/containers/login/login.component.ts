import { HomeComponent } from './../../../home/home.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from './../../models/login.interface';
import { Router } from '@angular/router';

import { UserLoginService } from './../../user-login.service';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userlogin: FormGroup;

  validation_messages = {
    'email' : [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Email must be valid' }
    ],
    'password' : [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 8 characters long' },
      { type: 'maxlength', message: 'Password cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Password must contain 1 lowercase, uppercase, number & special character' }
    ]
  };

  constructor(private userLoginService: UserLoginService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.userlogin = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
        // tslint:disable-next-line:max-line-length
        // Validators.pattern('^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(25),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&#^-_])[A-Za-z\d$@$!%*?&#^-_].{8,}')
      ]))
    });
  }

  onSubmit({ value, valid }: { value: Login, valid: boolean }) {
    this.userLoginService.login(value.email, value.password)
    .subscribe(
      data => {
        // now we need save user token to the cookie. or now i just simply save to Local storage.
        // https://github.com/tabvn/angular-blog
        const user = data.user;
        this.authService.setUser(user);

        const token = data.id;

        this.authService.setToken(token);

        // now we need redirect to profile user if they logged in.
        this.router.navigateByUrl('/account');
        window.location.reload(true);
      }, err => {
        console.log(err);
      });
  }

}
