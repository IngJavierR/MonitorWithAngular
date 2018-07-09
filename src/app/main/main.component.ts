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

  countryYucatan: string;
  repIt: string;
  stateText: string;
  stateConnector: string;
  tickets: any[];
  constructor(private dialog: MatDialog,
              private _consumeService: ConsumeService) {
  }

  ngOnInit() {
    this.getTickets();
    this.alertar('normal');
  }

  testAlarms() {
    this.getAlarms(5);
  }

  getTickets() {
    this._consumeService
    .getTickets()
    .subscribe(x => {
      this.tickets = x;
    })
  }

  getAlarms(time) {
    this._consumeService
    .getAlarms(time)
    .subscribe(x => {
      console.log('alarms', x);
      if(x.length > 0){
        if(x[0].alarmsDTO.severity === 'CRITICAL'){
          this.alertar('alarmed');
        }else{
          this.alertar('normal');
        }
      }
    })
  }

  alertar(state) {
    this.changeConnectorState(state);
    this.changeCountryState(state);
    this.alarmed(state);
  }

  showDevice(deviceId) {
    this._consumeService
    .getDeviceInfo(deviceId)
    .subscribe(x => {
      let dialogConfig = this.configModal(x);
      this.dialog.open(ShowDescriptionComponent, dialogConfig);
    })
  }

  configModal(data) {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      bottom: '0',
      right: '0'
    };
    dialogConfig.hasBackdrop = false;
    dialogConfig.panelClass = 'custom-modalbox';
    console.log('data', data);
    dialogConfig.data = data;
    return dialogConfig;
  }

  changeConnectorState(state) {
    if(state === 'alarmed') {
      this.repIt = 'core-connector-red alarm-box-animation';
      this.showDevice(194255080);
    }else {
      this.repIt = 'core-connector-blue';
      this.dialog.closeAll();
    }
  }

  changeCountryState(state) {
    if(state === 'alarmed') {
      this.countryYucatan = 'country-red alarm-box-animation';
    }else {
      this.countryYucatan = 'map-unselected-country';
    }
  }

  alarmed(state) {
    this.stateText = `text-state-${state}`;
    this.stateConnector = `state-${state}`;
  }

}
