import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFinancialReportComponent } from './add-financial-report.component';

describe('AddFinancialReportComponent', () => {
  let component: AddFinancialReportComponent;
  let fixture: ComponentFixture<AddFinancialReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFinancialReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFinancialReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
