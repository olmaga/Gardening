import {Component, Inject, LOCALE_ID} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(@Inject(LOCALE_ID) private localeId: string) {}

  languages = [
    { code: 'en', label: 'English'},
    { code: 'de', label: 'Deutsch'},
    { code: 'fr', label: 'Français'}
  ];

}
