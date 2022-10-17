import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { CountriesfullComponent } from './components/countriesfull/countriesfull.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { FilterbyregionPipe } from './pipes/filterbyregion.pipe';
import { SearchfilterComponent } from './components/searchfilter/searchfilter.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountriesfullComponent,
    NavbarComponent,
    DropdownComponent,
    SearchbarComponent,
    FilterbyregionPipe,
    SearchfilterComponent,
    SearchPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
