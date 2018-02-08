import {Component, OnInit} from '@angular/core';
import {Specie} from '../specie';
import {SpecieService} from '../specie.service';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css']
})
export class SpeciesListComponent implements OnInit {

  availableSpecies: Specie[];

  constructor(private specieService: SpecieService) {
  }

  ngOnInit() {
    this.availableSpecies = this.specieService.getAvailableSpecies();
  }

}
