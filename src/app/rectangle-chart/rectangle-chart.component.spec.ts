import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleChartComponent } from './rectangle-chart.component';

describe('RectangleChartComponent', () => {
  let component: RectangleChartComponent;
  let fixture: ComponentFixture<RectangleChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectangleChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
