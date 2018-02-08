import {Component, OnInit} from '@angular/core';
import {Species} from '../species';
import {SpeciesService} from '../species.service';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css']
})
export class SpeciesListComponent implements OnInit {

  availableSpecies: Species[];

  constructor(private speciesService: SpeciesService) {
  }

  ngOnInit() {
    this.availableSpecies = this.speciesService.getAvailableSpecies();
  }

}
