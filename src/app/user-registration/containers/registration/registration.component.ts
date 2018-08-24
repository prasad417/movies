import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

import { User } from './../../models/user.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user: FormGroup;

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }

  reset() {
    this.user.reset();
    console.log('Form reset complete');
  }

  constructor() { }

  ngOnInit() {
    this.user = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.max(25), Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      middleName: new FormControl(''),
      lastName: new FormControl('', [Validators.required, Validators.max(25), Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10),
        Validators.maxLength(10), Validators.pattern('[0-9]*')]),
      // phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{3}[-\s]{0,1}[0-9]{3}[-\s]{0,1}[0-9]{4}$')]),
      addressLine1: new FormControl('', [Validators.required, Validators.minLength(1), Validators.max(25)]),
      addressLine2: new FormControl('', [Validators.minLength(0), Validators.maxLength(25)]),
      city: new FormControl('', [Validators.required, Validators.minLength(1), Validators.max(25),
        Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      state: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5),
        Validators.pattern('^[0-9]{5}')]),
      // address: new FormGroup({
      //   addressLine1: new FormControl('', [Validators.required]),
      //   addressLine2: new FormControl(''),
      //   city: new FormControl('', [Validators.required]),
      //   state: new FormControl('', [Validators.required]),
      //   zip: new FormControl('', [Validators.required])
      // }),
      email: new FormControl('', [Validators.required, Validators.pattern('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')])
    });
  }

}
