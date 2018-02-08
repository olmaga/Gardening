import {Component, Input, OnInit} from '@angular/core';
import {Species} from '../species';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  @Input() species: Species;

  constructor() {
  }

  ngOnInit() {
  }

}
