import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incident-chart',
  templateUrl: './incident-chart.component.html',
  styleUrls: ['./incident-chart.component.css']
})
export class IncidentChartComponent implements OnInit {

  hours: any[];
  constructor() { }

  ngOnInit() {
    this.hours = [
      {
        id: 1,
        hour: '12am',
        numTickets: 50
      },
      {
        id: 2,
        hour: '1am',
        numTickets: 20
      },
      {
        id: 3,
        hour: '2am',
        numTickets: 10
      },
      {
        id: 4,
        hour: '3am',
        numTickets: 40
      },
      {
        id: 5,
        hour: '4am',
        numTickets: 50
      },
      {
        id: 6,
        hour: '5am',
        numTickets: 20
      },
      {
        id: 7,
        hour: '6am',
        numTickets: 10
      },
      {
        id: 8,
        hour: '7am',
        numTickets: 40
      }
    ];
  }

}
