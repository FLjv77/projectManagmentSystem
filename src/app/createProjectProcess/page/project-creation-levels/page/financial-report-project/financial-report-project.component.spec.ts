import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialReportProjectComponent } from './financial-report-project.component';

describe('FinancialReportProjectComponent', () => {
  let component: FinancialReportProjectComponent;
  let fixture: ComponentFixture<FinancialReportProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialReportProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialReportProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
