import {Component, OnInit} from '@angular/core';
import {Species} from '../species';
import {ActivatedRoute} from '@angular/router';

import {SpeciesService} from '../species.service';
import {Todo} from '../todo';


@Component({
  selector: 'app-species-edit',
  templateUrl: './species-edit.component.html',
  styleUrls: ['./species-edit.component.scss']
})
export class SpeciesEditComponent implements OnInit {

  species: Species;

  constructor(private route: ActivatedRoute,
              private speciesService: SpeciesService) {
  }

  ngOnInit() {
    this.speciesService
      .getSpeciesById(this.route.snapshot.paramMap.get('id'))
      .subscribe(species => {
        return this.species = species;
      });
  }

  addTodo() {
    this.species.todos.push(<Todo>{});
  }

}
