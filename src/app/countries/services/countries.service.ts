
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interface/country';
import { cacheStore } from '../interface/cache-store.interface';
import { Region } from '../interface/region.tipe';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl:string= 'https://restcountries.com/v3.1'

  public cacheStore:cacheStore={
    byCapital: {term: '', countries:[]},
    byCountries: {term: '', countries:[]},
    byRegion: {Region: '', countries:[]}
  }

  constructor(private http: HttpClient) {}

  private getCountriesRequest( url:string ): Observable <Country[]> {
    return this.http.get<Country[]>( url )
    .pipe(
      catchError(error=> of ([]))      )
  }

  searchCountryByAlphaCode( code:string ): Observable <Country | null>{
    const url= `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url)
    .pipe(
        map( countries=> countries.length>0 ? countries[0]: null ),
        catchError( error=> of (null))
    )

  }

  searchCapital( term:string ): Observable<Country []>{
    const url=`${this.apiUrl}/capital/${term}`
    return this.getCountriesRequest(url)
            .pipe(
              tap( countries=> this.cacheStore.byCapital={ term, countries })
            )
  }

  searchCountry( valor:string ): Observable <Country[]> {
    const url=`${this.apiUrl}/name/${valor}`
    return this.getCountriesRequest(url)
            .pipe(
              tap(paises=> this.cacheStore.byCountries={ term: valor, countries:paises}))

  }

  searchRegion( valor:Region): Observable <Country[]>{
    const url=`${this.apiUrl}/region/${valor}`;
    return this.getCountriesRequest(url)
            .pipe(
              tap( regions=> this.cacheStore.byRegion={ Region:valor, countries: regions })
            )
  }


}
