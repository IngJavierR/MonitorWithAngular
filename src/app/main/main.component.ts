import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  alarms: any[];
  //countryVeracruz = 'country-red';
  //coreConnector = 'core-connector-red';
  constructor() {
    
  }

  ngOnInit() {

  }

  changeStyle() {
    this.changeConnector();
    this.changeCountryColor();
  }

  changeConnector() {
    /*if(this.coreConnector === 'core-connector-red') {
      this.coreConnector = 'core-connector-blue';
    }else {
      this.coreConnector = 'core-connector-red';
    }*/
  }

  changeCountryColor() {
    /*if(this.countryVeracruz === 'country-red') {
      this.countryVeracruz = 'country-black';
    }else {
      this.countryVeracruz = 'country-red';
    }*/
  }

}
