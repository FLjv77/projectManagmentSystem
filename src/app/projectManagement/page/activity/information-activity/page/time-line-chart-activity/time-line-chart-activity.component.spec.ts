import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineChartActivityComponent } from './time-line-chart-activity.component';

describe('TimeLineChartActivityComponent', () => {
  let component: TimeLineChartActivityComponent;
  let fixture: ComponentFixture<TimeLineChartActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeLineChartActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeLineChartActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
