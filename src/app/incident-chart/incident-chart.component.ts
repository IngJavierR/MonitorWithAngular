import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { ConsumeService } from '../services/consume.service';
import { allResolved } from 'q';

@Component({
  selector: 'app-incident-chart',
  templateUrl: './incident-chart.component.html',
  styleUrls: ['./incident-chart.component.css']
})
export class IncidentChartComponent implements OnInit {

  hours: any[] = [];
  constructor(private _consumeService: ConsumeService) { 
    
  }

  ngOnInit() {
    /*this._consumeService
      .getTickets()
      .subscribe(alarms => {
        this.hours = alarms;
      })*/
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
