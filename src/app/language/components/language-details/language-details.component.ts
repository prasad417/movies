import { Component, OnInit, Input } from '@angular/core';

import { Language } from '../../models/language.interface';

@Component({
  selector: 'app-language-details',
  templateUrl: './language-details.component.html',
  styleUrls: ['./language-details.component.scss']
})
export class LanguageDetailsComponent implements OnInit {
  @Input()
  detail: Language;

  constructor() { }

  ngOnInit() { }

}
