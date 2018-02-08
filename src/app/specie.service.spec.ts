import {TestBed, inject} from '@angular/core/testing';

import {SpecieService} from './specie.service';
import {TodoService} from './todo.service';

describe('SpecieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpecieService, TodoService]
    });
  });

  it('should be created', inject([SpecieService], (service: SpecieService) => {
    expect(service).toBeTruthy();
  }));

  it('2 available', inject([SpecieService], (service: SpecieService) => {
    expect(service.getAvailableSpecies().length).toBe(2);

    expect(service.getAvailableSpecies()[0].id).toBe('1');

    expect(service.getAvailableSpecies()[0].name).toBe('Lauch');
  }));

});
