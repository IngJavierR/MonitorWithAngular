import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent, routes } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule,
        MatSnackBarModule,
        MatDialogModule,
        MatCardModule,
        MatGridListModule } from '@angular/material';

import { APP_PROVIDERS } from './app.providers';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShowDescriptionComponent } from './show-description/show-description.component';
import { CircularProgressComponent } from './circular-progress/circular-progress.component';
import { IncidentChartComponent } from './incident-chart/incident-chart.component';
import { RectangleChartComponent } from './rectangle-chart/rectangle-chart.component';

export const MATERIAL_COMPONENTS = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatDialogModule,
  MatCardModule,
  MatGridListModule
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    ContactComponent,
    ShowDescriptionComponent,
    CircularProgressComponent,
    IncidentChartComponent,
    RectangleChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MATERIAL_COMPONENTS,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent],
  entryComponents: [ShowDescriptionComponent]
})
export class AppModule { }
