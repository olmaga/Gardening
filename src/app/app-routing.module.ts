import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SpeciesListComponent} from './species-list/species-list.component';
import {SpeciesEditComponent} from './species-edit/species-edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'species', pathMatch: 'full'},
  {path: 'species', component: SpeciesListComponent},
  {path: 'species/:id', component: SpeciesEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
