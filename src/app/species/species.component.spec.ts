import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DebugElement} from '@angular/core';
import {SpeciesComponent} from '../species/species.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {SpeciesListComponent} from '../species-list/species-list.component';
import {SpeciesEditComponent} from '../species-edit/species-edit.component';
import {APP_BASE_HREF} from '@angular/common';

describe('SpeciesComponent', () => {
  let component: SpeciesComponent;
  let fixture: ComponentFixture<SpeciesComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        FormsModule
      ],
      declarations: [
        SpeciesComponent,
        SpeciesListComponent,
        SpeciesEditComponent
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
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
    expect(element.nativeElement.textContent).toContain('more');
  });

  it('details are toggleable', () => {
    expect(element.nativeElement.querySelector('a').textContent).toContain('more');

    element.nativeElement.querySelector('a').click();

    fixture.detectChanges();

    expect(element.nativeElement.querySelector('a').textContent).toContain('less');

    expect(element.nativeElement.querySelector('.species-details').textContent).toContain('Width');
    expect(element.nativeElement.querySelector('.species-details')).toBeTruthy();

    element.nativeElement.querySelector('a').click();

    fixture.detectChanges();

    expect(element.nativeElement.querySelector('a').textContent).toContain('more');

    expect(element.nativeElement.querySelector('.species-details')).toBeFalsy();
  });

  it('assignee is shown correctly if existing/nonexisting', () => {
    component.detailed = true;

    component.species = {
      id: '22',
      name: 'Babeli',
      width: 315,
      distance: 5,
      assignee: 'Oli'
    };

    fixture.detectChanges();

    expect(element.nativeElement.querySelector('.species-details').textContent).toContain('315');
    expect(element.nativeElement.querySelector('.species-details').textContent).toContain('Oli');

    component.species = {
      id: '22',
      name: 'Babeli',
      width: 315,
      distance: 5
    };

    fixture.detectChanges();

    expect(element.nativeElement.querySelector('.species-details').textContent).toContain('nobody');
  });

});
