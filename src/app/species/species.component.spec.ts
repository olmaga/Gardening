import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DebugElement} from '@angular/core';
import {SpeciesComponent} from '../species/species.component';

describe('SpeciesComponent', () => {
  let component: SpeciesComponent;
  let fixture: ComponentFixture<SpeciesComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SpeciesComponent
      ],
      providers: [
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesComponent);
    component = fixture.componentInstance;
    component.species = {
      id: '22', name: 'Babeli', width: 3, distance: 5
    };
    fixture.detectChanges();
    element = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show id and name', () => {
    expect(element.nativeElement.textContent).toContain('22');
    expect(element.nativeElement.textContent).toContain('Babeli');
  });
});
