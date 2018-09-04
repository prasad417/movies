import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from './../../models/login.interface';
import { Router } from '@angular/router';

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

  constructor() { }

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
    // console.log(value, valid);
    console.log('Login will be coming soon.');
  }

}
