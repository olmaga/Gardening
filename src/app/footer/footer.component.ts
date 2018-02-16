import {Component, OnInit, Inject, LOCALE_ID} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(@Inject(LOCALE_ID) private localeId: string) {
  }

  languages = [
    {code: 'en', label: 'English'},
    {code: 'de', label: 'Deutsch'},
    {code: 'fr', label: 'Français'}
  ];

  ngOnInit() {
  }

}
