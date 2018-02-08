import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SpeciesListComponent} from './species-list/species-list.component';
import {SpeciesService} from './species.service';
import {TodoService} from './todo.service';


@NgModule({
  declarations: [
    AppComponent,
    SpeciesListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SpeciesService,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
