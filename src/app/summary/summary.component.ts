import { Component, OnInit } from '@angular/core';
import { PassengersDetailsComponent } from '../passengers-details/passengers-details.component';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent extends PassengersDetailsComponent  implements OnInit {

  country = localStorage.getItem('country');
  passenger = +(localStorage.getItem('passenger'));

  constructor(service?: CountriesService) {
    super(service);
  }
  
  ngOnInit() {
    console.log(this.country,  this.passenger)
  }

}
