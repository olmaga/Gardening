import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {SpeciesListComponent} from './species-list/species-list.component';
import {TodoService} from './todo.service';
import {SpeciesService} from './species.service';
import {SpeciesComponent} from './species/species.component';
import {AppRoutingModule} from './app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import {SpeciesEditComponent} from './species-edit/species-edit.component';
import {FormsModule} from '@angular/forms';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        SpeciesListComponent,
        SpeciesEditComponent,
        SpeciesComponent
      ],
      providers: [
        SpeciesService,
        TodoService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Garden your ass off!');
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
