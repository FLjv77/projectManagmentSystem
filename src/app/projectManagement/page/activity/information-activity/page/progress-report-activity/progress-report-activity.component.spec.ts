import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressReportActivityComponent } from './progress-report-activity.component';

describe('ProgressReportActivityComponent', () => {
  let component: ProgressReportActivityComponent;
  let fixture: ComponentFixture<ProgressReportActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressReportActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressReportActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
