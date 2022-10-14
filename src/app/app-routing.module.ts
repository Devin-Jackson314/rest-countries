import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';
import { CountriesfullComponent } from './components/countriesfull/countriesfull.component';

const routes: Routes = [
  { path: 'countries', component: CountriesComponent },
  { path: "full", component: CountriesfullComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
