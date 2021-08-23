import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Country } from '../interfaces/country.interface';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API = 'https://restcountries.eu/rest/v2'

  constructor(private http:HttpClient) { }

  getAllCountries(){
    return this.http.get<Country[]>(`${this.API}/all`)
  }

  getCountryByName(name:string){
    return this.http
      .get<Country[]>(`${this.API}/name/${name}`)
      .pipe(map(([res]) => res));
  }

  searchCountry(name:string){
    return this.http.get<Country[]>(`https://restcountries.eu/rest/v2/name/${name}`)
  }

  getCountriesByCodes(codes: string[]) {
    console.log(`${this.API}/alhpa?codes=${codes.join(';')}`);
    return this.http.get<Country[]>(
      `${this.API}/alpha?codes=${codes.join(';')}`
    );
  }
}
