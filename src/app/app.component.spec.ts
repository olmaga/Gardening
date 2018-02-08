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
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
