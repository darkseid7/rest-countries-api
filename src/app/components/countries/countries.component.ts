import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Country } from 'src/app/interfaces/country.interface';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries$!: Observable<Country[]>;

  constructor(private API:ApiService) {
    
   }

  ngOnInit(): void {
    this.countries$ = this.API.getAllCountries()
  }

}
