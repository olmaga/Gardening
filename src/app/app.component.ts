import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  languages = [
    { code: 'en', label: 'English'},
    { code: 'de', label: 'Deutsch'},
    { code: 'fr', label: 'Français'}
  ];

}
