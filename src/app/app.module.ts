import {registerLocaleData} from '@angular/common';
import localeDe from '@angular/common/locales/de';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './/app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {SpeciesEditComponent} from './species-edit/species-edit.component';
import {SpeciesListComponent} from './species-list/species-list.component';
import {SpeciesService} from './species.service';
import {SpeciesComponent} from './species/species.component';
import {TodoService} from './todo.service';
import {FormsModule} from '@angular/forms';
import {DateValueAccessorModule} from 'angular-date-value-accessor';

registerLocaleData(localeDe, 'de');

@NgModule({
  declarations: [
    AppComponent,
    SpeciesListComponent,
    SpeciesComponent,
    FooterComponent,
    SpeciesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DateValueAccessorModule

  ],
  providers: [
    SpeciesService,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
