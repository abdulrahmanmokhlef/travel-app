import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private countryList = ["Egypt", "Canada", "Algeria", "Armenia", "US", "Bahrain", "Brazil"];
  private numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  getCountries(){
    return this.countryList;
  }
  getNumbers(){
    return this.numbers;
  }
}
