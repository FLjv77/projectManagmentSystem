import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordFinancialReportModalComponent } from './record-financial-report-modal.component';

describe('RecordFinancialReportModalComponent', () => {
  let component: RecordFinancialReportModalComponent;
  let fixture: ComponentFixture<RecordFinancialReportModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordFinancialReportModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordFinancialReportModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
