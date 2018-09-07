import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './../../models/user.interface';
import { Gender } from './../../models/gender.interface';

import { UserRegistrationService } from './../../user-registration.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user: FormGroup;

  gender: Gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
  ];

  now = new Date();
  maxYear = (this.now.getFullYear() - 18);
  minYear = (this.now.getFullYear() - 99);
  month = this.now.getMonth();
  day = this.now.getDate();
  minDate = new Date(this.minYear, this.month, this.day);
  maxDate = new Date(this.maxYear, this.month, this.day);


  constructor(private userRegistration: UserRegistrationService, private router: Router) {}

  validation_messages = {
    'firstName' : [
      { type: 'required', message: 'First name is required' },
      { type: 'minlength', message: 'First name must be at least 1 characters long' },
      { type: 'maxlength', message: 'First name cannot be more than 25 characters long' },
      { type: 'pattern', message: 'First name must contain only letters' }
    ],
    'middleName' : [
      { type: 'minlength', message: 'Middle name must be at least 1 characters long' },
      { type: 'maxlength', message: 'Middle name cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Middle name must contain only letters' }
    ],
    'lastName' : [
      { type: 'required', message: 'Last name is required' },
      { type: 'minlength', message: 'Last name must be at least 1 characters long' },
      { type: 'maxlength', message: 'Last name cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Last name must contain only letters' }
    ],
    'gender': [
      { type: 'required', message: 'Please select gender.' }
    ],
    'dob': [
      { type: 'required', message: 'Please select date.' }
    ],
    'phoneNumber' : [
      { type: 'required', message: 'Phone number is required' },
      { type: 'minlength', message: 'Phone number must be 10 digits' },
      { type: 'maxlength', message: 'Phone number must be 10 digits' },
      { type: 'pattern', message: 'Phone number must contain only numbers' }
    ],
    'addressLine1' : [
      { type: 'required', message: 'Address line1 is required' },
      { type: 'minlength', message: 'Address line1 must be at least 1 characters long' },
      { type: 'maxlength', message: 'Address line1 cannot be more than 25 characters long' }
    ],
    'addressLine2' : [
      { type: 'minlength', message: 'Address line2 must be at least 1 characters long' },
      { type: 'maxlength', message: 'Address line2 cannot be more than 25 characters long' }
    ],
    'city' : [
      { type: 'required', message: 'City is required' },
      { type: 'minlength', message: 'City must be at least 1 characters long' },
      { type: 'maxlength', message: 'City cannot be more than 25 characters long' },
      { type: 'pattern', message: 'City must contain only letters' }
    ],
    'state' : [
      { type: 'required', message: 'State is required' },
      { type: 'minlength', message: 'State must be at least 1 characters long' },
      { type: 'maxlength', message: 'State cannot be more than 25 characters long' },
      { type: 'pattern', message: 'State must contain only letters' }
    ],
    'zipcode' : [
      { type: 'required', message: 'Zipcode is required' },
      { type: 'minlength', message: 'Zipcode must be 5 digits' },
      { type: 'maxlength', message: 'Zipcode must be 5 digits' },
      { type: 'pattern', message: 'Zipcode must contain only numbers' }
    ],
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

  ngOnInit() {
    this.user = new FormGroup({
      firstName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(25),
        Validators.pattern('[a-zA-Z ]+')
      ])),
      middleName: new FormControl('', Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(25),
        Validators.pattern('[a-zA-Z ]+')
      ])),
      lastName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(25),
        Validators.pattern('[a-zA-Z ]+')
      ])),
      dob: new FormControl('', Validators.compose([
        Validators.required
      ])),
      gender: new FormControl('', Validators.compose([
        Validators.required
      ])),
      phoneNumber: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('[0-9]+')
      ])),
      // phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{3}[-\s]{0,1}[0-9]{3}[-\s]{0,1}[0-9]{4}$')]),
      addressLine1: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(25),
      ])),
      addressLine2: new FormControl('', Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(25),
      ])),
      city: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(25),
        Validators.pattern('[a-zA-Z]+')
      ])),
      state: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(25),
        Validators.pattern('[a-zA-Z]+')
      ])),
      zipcode: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
        Validators.pattern('^[0-9]{5}')
      ])),
      // address: new FormGroup({
      //   addressLine1: new FormControl('', [Validators.required]),
      //   addressLine2: new FormControl(''),
      //   city: new FormControl('', [Validators.required]),
      //   state: new FormControl('', [Validators.required]),
      //   zip: new FormControl('', [Validators.required])
      // }),
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

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
    this.userRegistration.register(value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        error => {
            console.log();
        }
      );
  }

  reset() {
    this.user.reset();
  }

}
