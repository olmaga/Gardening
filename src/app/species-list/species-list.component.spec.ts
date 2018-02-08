import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SpeciesListComponent} from './species-list.component';
import {SpecieService} from '../specie.service';
import {TodoService} from '../todo.service';

describe('SpeciesListComponent', () => {
  let component: SpeciesListComponent;
  let fixture: ComponentFixture<SpeciesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpeciesListComponent],
      providers: [
        SpecieService,
        TodoService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
