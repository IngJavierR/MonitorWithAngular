import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-incident-chart',
  templateUrl: './incident-chart.component.html',
  styleUrls: ['./incident-chart.component.css']
})
export class IncidentChartComponent implements OnInit {

  hours: any[] = [];
  constructor() { }

  ngOnInit() {
    this.createHours('am');
    this.createHours('pm');
  }

  createHours(timeId) {
    range(0,12).subscribe(x => {
      this.hours.push({
        id: x,
        hour: (x === 0) ? `12${timeId}` : `${x}${timeId}`,
        numTickets: Math.floor(Math.random() * 100) + 1
      });
    });
  }

}
