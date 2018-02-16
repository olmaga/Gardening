import {Injectable} from '@angular/core';
import {Species} from './species';
import {TodoService} from './todo.service';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class SpeciesService {

  availableSpecies = [
    {
      id: '1',
      width: 12,
      distance: 30,
      name: 'Lauch',
      todos: [
        {id: '1', description: 'Water it!', due: new Date(100000)},
        {id: '2', description: 'Water it again!', due: new Date(200000)}
      ]
    },
    {
      id: '2',
      width: 5,
      distance: 5,
      name: 'Radieschen',
      todos: []
    }
  ];

  constructor(private todoService: TodoService) {
  }

  getAvailableSpecies(): Species[] {
    return this.availableSpecies;
  }

  getSpeciesById(id: string): Observable<Species> {
    const match = this.getAvailableSpecies()
      .filter(species => species.id === id);

    return of(match.length > 0 ? match[0] : undefined);
  }
}
