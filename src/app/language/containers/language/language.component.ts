import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Language } from '../../models/language.interface';
import { User } from '../../../user-registration/models/user.interface';

import { LanguageService } from '../../language.service';
import { AuthService } from './../../../user-login/auth.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  languages: Language[];
  user: User;

  public errorMsg;

  constructor(private languageService: LanguageService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    if (this.user === null) {
      this.router.navigate(['/login']);
    } else {
      this.languageService
        .getLanguages()
        .subscribe((data: Language[]) => this.languages = data.sort(
          (a: Language, b: Language) => (a.name < b.name ? -1 : 1)
        ));
    }
      // (error: any) => this.errorMsg = error);
  }

}
