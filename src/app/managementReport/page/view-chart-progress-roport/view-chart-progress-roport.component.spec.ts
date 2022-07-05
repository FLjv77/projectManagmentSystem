import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChartProgressRoportComponent } from './view-chart-progress-roport.component';

describe('ViewChartProgressRoportComponent', () => {
  let component: ViewChartProgressRoportComponent;
  let fixture: ComponentFixture<ViewChartProgressRoportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChartProgressRoportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChartProgressRoportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
