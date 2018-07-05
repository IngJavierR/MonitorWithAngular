import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-show-description',
  templateUrl: './show-description.component.html',
  styleUrls: ['./show-description.component.css']
})
export class ShowDescriptionComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ShowDescriptionComponent>,
              @Inject(MAT_DIALOG_DATA) data) {

  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
