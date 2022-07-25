import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalChartForCompanyComponent } from './total-chart-for-company.component';

describe('TotalChartForCompanyComponent', () => {
  let component: TotalChartForCompanyComponent;
  let fixture: ComponentFixture<TotalChartForCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalChartForCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalChartForCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
