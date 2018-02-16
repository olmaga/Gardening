import {DebugElement} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {SpeciesListComponent} from '../species-list/species-list.component';
import {SpeciesService} from '../species.service';
import {TodoService} from '../todo.service';
import {APP_BASE_HREF} from '@angular/common';

import {SpeciesEditComponent} from './species-edit.component';
import {SpeciesComponent} from '../species/species.component';
import {of} from 'rxjs/observable/of';

const speciesServiceStub = {
  getSpeciesById: (id: string) => {
    return of({
      id: '11',
      width: 122,
      distance: 303,
      name: 'Lauchilauch',
      todos: [{id: '123', description: 'Water it!', due: new Date()}]
    });
  }
};

describe('SpeciesEditComponent', () => {
  let component: SpeciesEditComponent;
  let fixture: ComponentFixture<SpeciesEditComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        FormsModule
      ],
      declarations: [
        SpeciesComponent,
        SpeciesEditComponent,
        SpeciesListComponent
      ],
      providers: [
        TodoService,
        {provide: SpeciesService, useValue: speciesServiceStub},
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.debugElement;
  });

  it('has a back link', () => {
    expect(element.nativeElement.textContent).toContain('back');
  });
  it('shows the id', () => {
    expect(element.nativeElement.textContent).toContain('11');
  });
  it('shows the todos', () => {
    expect(element.nativeElement.textContent).toContain('Water it!');
  });
});
