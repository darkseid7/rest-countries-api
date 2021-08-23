import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CountryListComponent } from './components/country-list/country-list.component';
@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryDetailComponent,
    CountryCardComponent,
    NavbarComponent,
    SearchBarComponent,
    CountryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
