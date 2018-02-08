import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {SpeciesListComponent} from './species-list/species-list.component';
import {TodoService} from './todo.service';
import {SpecieService} from './specie.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SpeciesListComponent
      ],
      providers: [
        SpecieService,
        TodoService
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
