import {Component, Input, OnInit} from '@angular/core';
import {Species} from '../species';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {

  @Input() species: Species;
  detailed: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  toggleDetails() {
    this.detailed = !this.detailed;
  }
}
