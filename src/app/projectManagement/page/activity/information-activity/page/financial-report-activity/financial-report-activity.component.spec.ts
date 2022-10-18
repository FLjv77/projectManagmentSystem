import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialReportActivityComponent } from './financial-report-activity.component';

describe('FinancialReportActivityComponent', () => {
  let component: FinancialReportActivityComponent;
  let fixture: ComponentFixture<FinancialReportActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialReportActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialReportActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
