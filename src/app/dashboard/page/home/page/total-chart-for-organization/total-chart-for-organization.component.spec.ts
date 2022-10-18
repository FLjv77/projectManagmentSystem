import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalChartForOrganizationComponent } from './total-chart-for-organization.component';

describe('TotalChartForOrganizationComponent', () => {
  let component: TotalChartForOrganizationComponent;
  let fixture: ComponentFixture<TotalChartForOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalChartForOrganizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalChartForOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
