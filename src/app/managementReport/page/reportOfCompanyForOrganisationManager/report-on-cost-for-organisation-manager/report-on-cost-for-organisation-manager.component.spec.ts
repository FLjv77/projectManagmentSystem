import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportOnCostForOrganisationManagerComponent } from './report-on-cost-for-organisation-manager.component';

describe('ReportOnCostForOrganisationManagerComponent', () => {
  let component: ReportOnCostForOrganisationManagerComponent;
  let fixture: ComponentFixture<ReportOnCostForOrganisationManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportOnCostForOrganisationManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportOnCostForOrganisationManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
