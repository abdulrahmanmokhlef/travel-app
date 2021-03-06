import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  signIn(formInput){
    if(formInput.username != "" && formInput.password != ""){
      this.router.navigate(['/flightDetails']);
    }
    console.log( formInput);
  }
  ngOnInit() {
  }

}
