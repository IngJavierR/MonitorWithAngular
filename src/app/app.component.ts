import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DataService } from './services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { config } from 'rxjs';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLoading = false;
  constructor(private _dataService: DataService, private _snackBar: MatSnackBar,
              private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      `attlogo`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/att_logo.svg")
    );

    this._dataService
        .getIsLoadingEvent()
        .subscribe(isLoad => this.isLoading = isLoad);
    this._dataService
        .getGeneralNotificationMessage()
        .subscribe(msg => {
          this._snackBar.open(msg, 'Ok', {
            duration: 2000
          });
        });
  }
}

export const routes: Routes = [
  { 
    path: '', 
    component: MainComponent 
  },
  { 
    path: 'about', 
    component: AboutComponent 
  },
  { 
    path: 'contact', 
    component: ContactComponent 
  }
];
