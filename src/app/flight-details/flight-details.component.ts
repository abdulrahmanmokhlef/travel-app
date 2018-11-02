import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent {

  constructor(private service?: CountriesService, private router?: Router) { }
  countryList = this.service.getCountries();
  numbers = this.service.getNumbers();

  selectedCountry ;
  numberOfPassengers;

  submit() {
    this.cp();
    if (this.selectedCountry && this.numberOfPassengers) {
      this.router.navigate(['/passemgersDetails']);
    }

  }

  cp() {
    localStorage.setItem('country', this.selectedCountry);
    localStorage.setItem('passenger', this.numberOfPassengers);
   }
}
