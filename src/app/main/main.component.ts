import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  alarms: any[];
  countryYucatan: string;
  coreConnector: string;
  repIt: string;
  alarmedConnectorAnimation: string;
  alarmBoxAnimation: string;
  constructor() {
  }

  ngOnInit() {
    this.repIt = 'core-connector-blue';
  }

  changeStyle() {
    this.changeConnector();
    this.changeCountryColor();
    this.alarmed();
  }

  changeConnector() {
    if(this.repIt === 'core-connector-red alarm-box-animation') {
      this.repIt = 'core-connector-blue';
    }else {
      this.repIt = 'core-connector-red alarm-box-animation';
    }
  }

  changeCountryColor() {
    if(this.countryYucatan === 'country-red alarm-box-animation') {
      this.countryYucatan = 'country-black';
    }else {
      this.countryYucatan = 'country-red alarm-box-animation';
    }
  }

  alarmed() {
    if(this.alarmedConnectorAnimation === 'alarmed-connector-animation') {
      this.alarmedConnectorAnimation = '';
    }else {
      this.alarmedConnectorAnimation = 'alarmed-connector-animation';
    }

    if(this.alarmBoxAnimation === 'alarm-box-animation') {
      this.alarmBoxAnimation = '';
    }else {
      this.alarmBoxAnimation = 'alarm-box-animation';
    }
  }

}
