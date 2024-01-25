import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interface/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  public Pais:Country[]=[];
  public isLoading:boolean=false;
  public initialValue:string=''

  constructor( private Service:CountriesService ){}
  ngOnInit(): void {
    this.Pais= this.Service.cacheStore.byCountries.countries;
    this.initialValue= this.Service.cacheStore.byCountries.term;
  }

  searchByCountry( valor:string){
    this.isLoading=true;
    this.Service.searchCountry( valor )
    .subscribe(Paises=> {this.Pais = Paises
    this.isLoading=false})
  }

}
