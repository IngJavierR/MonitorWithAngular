import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentChartComponent } from './incident-chart.component';

describe('IncidentChartComponent', () => {
  let component: IncidentChartComponent;
  let fixture: ComponentFixture<IncidentChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
