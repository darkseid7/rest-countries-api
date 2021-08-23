import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from 'src/app/interfaces/country.interface';
import { ApiService } from 'src/app/services/api.service';
import { tap, mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countriesSearch$!: Observable<Country[]>;
  constructor(private API:ApiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.countriesSearch$ = this.API.searchCountry(params['term']).pipe(
        tap((res) => console.log(res))
      );
    });

  }

}
