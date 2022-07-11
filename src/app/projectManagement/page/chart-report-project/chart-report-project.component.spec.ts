import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartReportProjectComponent } from './chart-report-project.component';

describe('ChartReportProjectComponent', () => {
  let component: ChartReportProjectComponent;
  let fixture: ComponentFixture<ChartReportProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartReportProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartReportProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
