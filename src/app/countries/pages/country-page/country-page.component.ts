import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country, Translation } from '../../interface/country';
import { transition } from '@angular/animations';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country?:Country;


  constructor (
    private activateRoute:ActivatedRoute,
    private router:Router,
    private service: CountriesService
    ){}

    ngOnInit(): void {
    this.activateRoute.params.pipe(
      switchMap(
        ({id})=> this.service.searchCountryByAlphaCode(id))
      ).subscribe( resultado=>{
        if( !resultado ) return this.router.navigateByUrl('capital');
        return this.country=resultado;
      }
      )
    }

}
