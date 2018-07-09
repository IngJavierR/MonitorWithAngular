import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-show-description',
  templateUrl: './show-description.component.html',
  styleUrls: ['./show-description.component.css']
})
export class ShowDescriptionComponent implements OnInit {

  deviceInfo: any;
  constructor(private dialogRef: MatDialogRef<ShowDescriptionComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    this.deviceInfo = data;
  }

  ngOnInit() {
    console.log('fans', this.deviceInfo[0].fans.fan);
  }

}
