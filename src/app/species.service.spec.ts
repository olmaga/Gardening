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

  it('getting id 1 is correct', inject([SpeciesService], (service: SpeciesService) => {

    service.getSpeciesById('1').subscribe(result => {
      expect(result.id).toBe('1');
      expect(result.name).toBe('Lauch');
    });

  }));

  it('getting id 2 is correct too', inject([SpeciesService], (service: SpeciesService) => {

    service.getSpeciesById('2').subscribe(result => {
      expect(result.id).toBe('2');
      expect(result.name).toBe('Radieschen');
    });

  }));

});
