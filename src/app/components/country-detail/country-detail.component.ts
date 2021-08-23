import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable, forkJoin, of } from 'rxjs';
import { Country, Currency, Language } from 'src/app/interfaces/country.interface';
import { ActivatedRoute } from '@angular/router';
import { tap, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  country$!: Observable<Country>
  borderCountries$!: Observable<Country[]>
  constructor(private API: ApiService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.country$ = this.API.getCountryByName(params.country).pipe(
        tap((res) => console.log(res)),
        mergeMap((res) => {
          this.borderCountries$ = this.API.getCountriesByCodes(res.borders);
          return of(res);
        })
      );
    });

  }

  displayCurrencies(currencies: Currency[]) {
    return currencies.map((currency) => currency.name).join(', ');
  }

  displayLanguages(languages: Language[]) {
    return languages.map((language) => language.name).join(', ');
  }

}
