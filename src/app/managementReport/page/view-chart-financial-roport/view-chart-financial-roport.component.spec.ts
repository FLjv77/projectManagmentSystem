import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChartFinancialRoportComponent } from './view-chart-financial-roport.component';

describe('ViewChartFinancialRoportComponent', () => {
  let component: ViewChartFinancialRoportComponent;
  let fixture: ComponentFixture<ViewChartFinancialRoportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChartFinancialRoportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChartFinancialRoportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
