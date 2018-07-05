import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ShowDescriptionComponent } from '../show-description/show-description.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  dialogConfig: any;
  alarms: any[];
  countryYucatan: string;
  coreConnector: string;
  repIt: string;
  alarmedConnectorAnimation: string;
  alarmBoxAnimation: string;
  repItText: string;
  treeAlarmed: boolean;
  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
    this.treeAlarmed = false;
    this.repIt = 'core-connector-blue';
    this.repItText = 'core-connector-text core-connector-text_white';
  }

  changeStyle() {
    this.treeAlarmed = !this.treeAlarmed;
    this.changeConnector();
    this.changeCountryColor();
    this.alarmed();
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
      this.repItText = 'core-connector-text core-connector-text_white';
    }else {
      this.repIt = 'core-connector-red alarm-box-animation';
      this.repItText = 'core-connector-text core-connector-text_red';
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
      this.dialog.closeAll();
    }else {
      this.alarmedConnectorAnimation = 'alarmed-connector-animation';
      this.configModal();
      this.dialog.open(ShowDescriptionComponent, this.dialogConfig);
    }

    if(this.alarmBoxAnimation === 'alarm-box-animation') {
      this.alarmBoxAnimation = '';
    }else {
      this.alarmBoxAnimation = 'alarm-box-animation';
    }
  }

}
