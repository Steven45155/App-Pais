import { Country } from "./country";
import { Region } from "./region.tipe";

export interface cacheStore{
  byCapital: TermCountries
  byCountries: TermCountries
  byRegion: RegionCountries
}

export interface TermCountries{
  term:string,
  countries: Country[]
}

export interface RegionCountries{
  Region:Region,
  countries: Country[]
}

