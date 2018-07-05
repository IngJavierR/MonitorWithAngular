import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-circular-progress',
  templateUrl: './circular-progress.component.html',
  styleUrls: ['./circular-progress.component.css']
})
export class CircularProgressComponent implements OnInit, OnChanges {

  @Input() value:number;
  radius = 25;
  circumference = 2 * Math.PI * this.radius;
  dashoffset: number;
  constructor() { }

  ngOnInit() {
    this.progress(this.value);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value.currentValue !== changes.value.previousValue) {
      this.progress(changes.value.currentValue);
    }
  }

  private progress(value: number) {
    const progress = value / 100;
    this.dashoffset = this.circumference * (1 - progress);
  }
}
