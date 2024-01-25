import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interface/country';
import { Region } from '../../interface/region.tipe';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit{

  constructor( private Service:CountriesService ){}

  Region:Country[]=[]
  public regions:Region[]=['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  public selectedRegion?: Region;
  public placeholder: string="Buscar por region"

  ngOnInit(): void {
    this.selectedRegion=this.Service.cacheStore.byRegion.Region;
    this.Region=this.Service.cacheStore.byRegion.countries;
  }

  searchByRegion( valor:Region ){
    this.selectedRegion= valor;
    this.Service.searchRegion( valor )
    .subscribe( region=> this.Region = region)
  }

}
