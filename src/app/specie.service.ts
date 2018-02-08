import {Injectable} from '@angular/core';
import {Specie} from './specie';
import {TodoService} from './todo.service';

@Injectable()
export class SpecieService {

  availableSpecies = [
    {
      id: '1',
      width: 12,
      distance: 30,
      name: 'Lauch'
    },
    {
      id: '2',
      width: 5,
      distance: 5,
      name: 'Radieschen'
    }
  ];

  constructor(private todoService: TodoService) {
  }

  getAvailableSpecies(): Specie[] {
    return this.availableSpecies;
  }
}
