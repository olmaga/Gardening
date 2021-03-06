import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SpeciesListComponent} from './species-list.component';
import {SpeciesService} from '../species.service';
import {TodoService} from '../todo.service';
import {AppComponent} from '../app.component';
import {DebugElement} from '@angular/core';
import {SpeciesComponent} from '../species/species.component';
import {AppRoutingModule} from '../app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SpeciesEditComponent} from '../species-edit/species-edit.component';

describe('SpeciesListComponent', () => {
  let component: SpeciesListComponent;
  let fixture: ComponentFixture<SpeciesListComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        SpeciesListComponent,
        SpeciesComponent,
        SpeciesEditComponent
      ],
      providers: [
        SpeciesService,
        TodoService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h2 tag', async(() => {
    expect(element.nativeElement.querySelector('h2').textContent).toContain('Available Species:');
  }));

  it('should contain a list', async(() => {
    expect(element.nativeElement.querySelector('ul')).toBeTruthy();
  }));

});
