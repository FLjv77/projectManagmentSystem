import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeFinancialReportInformationComponent } from './edite-financial-report-information.component';

describe('EditeFinancialReportInformationComponent', () => {
  let component: EditeFinancialReportInformationComponent;
  let fixture: ComponentFixture<EditeFinancialReportInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeFinancialReportInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditeFinancialReportInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
