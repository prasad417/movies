import { Component, OnInit } from '@angular/core';

import { Language } from '../../models/language.interface';

import { LanguageService } from '../../language.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  languages: Language[];

  public errorMsg;

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService
      .getLanguages()
      .subscribe((data: Language[]) => this.languages = data.sort(
        (a: Language, b: Language) => (a.name < b.name ? -1 : 1)
      ));
      // (error: any) => this.errorMsg = error);
  }

}
