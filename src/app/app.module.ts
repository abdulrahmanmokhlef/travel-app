import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContacusComponent } from './contacus/contacus.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { PassengersDetailsComponent } from './passengers-details/passengers-details.component';
import { SummaryComponent } from './summary/summary.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ContacusComponent,
    FlightDetailsComponent,
    PassengersDetailsComponent,
    SummaryComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([  
      {path: '', redirectTo: 'home', pathMatch: 'full' },
      {path: 'home', component: HomeComponent  },
      {path: 'login', component: LoginComponent},
      {path: 'contactus', component: ContacusComponent},
      {path:'flightDetails', component: FlightDetailsComponent},
      {path: 'passemgersDetails', component: PassengersDetailsComponent},
      {path: 'summary', component: SummaryComponent},
      {path: '**', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
