import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rectangle-chart',
  templateUrl: './rectangle-chart.component.html',
  styleUrls: ['./rectangle-chart.component.css']
})
export class RectangleChartComponent implements OnInit, OnChanges {

  @Input() value: number;
  level: number;
  levelInverse: string;
  constructor() { }

  ngOnInit() {
    this.progress(this.value);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value.currentValue !== changes.value.previousValue) {
      this.progress(changes.value.currentValue);
    }
  }

  progress(num) {
    this.level = num;
    this.levelInverse = (100 - num).toString() + '%';
  }

}
