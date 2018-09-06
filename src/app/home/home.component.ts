import { Component, OnInit, Input } from '@angular/core';

import { User } from './../user-registration/models/user.interface';

import { AuthService } from './../user-login/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  welcomeMessage: string;
  private message = 'welcome! to entertainment app.';
  user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    if (this.user === null) {
      this.welcomeMessage = this.message;
    } else {
      this.welcomeMessage = `${this.user.firstName}, ${this.message}`;
    }
  }

}
