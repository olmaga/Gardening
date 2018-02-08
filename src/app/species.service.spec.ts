import {TestBed, inject} from '@angular/core/testing';

import {SpeciesService} from './species.service';
import {TodoService} from './todo.service';

describe('SpecieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeciesService, TodoService]
    });
  });

  it('should be created', inject([SpeciesService], (service: SpeciesService) => {
    expect(service).toBeTruthy();
  }));

  it('2 available', inject([SpeciesService], (service: SpeciesService) => {
    expect(service.getAvailableSpecies().length).toBe(2);

    expect(service.getAvailableSpecies()[0].id).toBe('1');

    expect(service.getAvailableSpecies()[0].name).toBe('Lauch');
  }));

});
