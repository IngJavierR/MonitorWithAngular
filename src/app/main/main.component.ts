import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ShowDescriptionComponent } from '../show-description/show-description.component';
import { ConsumeService } from '../services/consume.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  dialogConfig: any;
  //alarms: any[];
  countryYucatan: string;
  repIt: string;
  state: string;
  stateText: string;
  stateConnector: string;
  constructor(private dialog: MatDialog,
              private _consumeService: ConsumeService) {
  }

  ngOnInit() {
    this.repIt = 'core-connector-blue';
    this.state = 'normal';
    this.stateText = 'text-state-normal';
    this.stateConnector = 'state-normal';
  }

  changeStyle() {
    this.changeConnector();
    this.changeCountryColor();
    if(this.state === 'normal'){
      this.state = 'alarmed'
    }else{
      this.state = 'normal'
    }
    this.alarmed(this.state);
    this.getAlarms();
  }

  getAlarms() {
    this._consumeService
    .getTickets()
    .subscribe(x => {
      console.log(x);
    })
  }

  showDevice(deviceId) {
    this.configModal();
    this.dialog.open(ShowDescriptionComponent, this.dialogConfig);
  }

  configModal() {
    this.dialogConfig = new MatDialogConfig();
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
    this.dialogConfig.position = {
      bottom: '0',
      right: '0'
    };
    this.dialogConfig.hasBackdrop = false;
    this.dialogConfig.panelClass = 'custom-modalbox';
  }

  changeConnector() {
    if(this.repIt === 'core-connector-red alarm-box-animation') {
      this.repIt = 'core-connector-blue';
      this.dialog.closeAll();
    }else {
      this.repIt = 'core-connector-red alarm-box-animation';
      this.configModal();
      this.dialog.open(ShowDescriptionComponent, this.dialogConfig);
    }
  }

  changeCountryColor() {
    if(this.countryYucatan === 'country-red alarm-box-animation') {
      this.countryYucatan = 'map-unselected-country';
    }else {
      this.countryYucatan = 'country-red alarm-box-animation';
    }
  }

  alarmed(state) {
    this.stateText = `text-state-${state}`;
    this.stateConnector = `state-${state}`;
  }

}
