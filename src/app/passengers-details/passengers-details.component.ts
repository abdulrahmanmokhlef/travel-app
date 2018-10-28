import { Component, OnInit, Input } from '@angular/core';
import { FlightDetailsComponent } from '../flight-details/flight-details.component';
import { CountriesService } from '../services/countries.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-passengers-details',
  templateUrl: './passengers-details.component.html',
  styleUrls: ['./passengers-details.component.css']
})
export class PassengersDetailsComponent extends FlightDetailsComponent implements OnInit {

 ft: FlightDetailsComponent;
 
 country;
 passenger: number;
 arr;
 route;

 constructor(service?: CountriesService, router?: Router) {
    super(service,router);
    this.route = router;
  }

  submitPassengerDetails(formInput){
    if(formInput.firstName != "" && formInput.lastName != "" && formInput.phoneNumber != null){
      this.route.navigate(['/summary']);
    }
    console.log( formInput);
  }
  ngOnInit() {
      this.country = localStorage.getItem('country');
      this.passenger = +(localStorage.getItem('passenger'));
    
      this.arr = new Array<number>(this.passenger);
      this.arr.fill(1,0, this.arr.length);

      console.log(this.country + this.passenger);
      console.log("Arr: " + this.arr.length);
      console.log("Arr: " + this.arr);

  }

}
