import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportOnEfficiencyForOrganisationManagerComponent } from './report-on-efficiency-for-organisation-manager.component';

describe('ReportOnEfficiencyForOrganisationManagerComponent', () => {
  let component: ReportOnEfficiencyForOrganisationManagerComponent;
  let fixture: ComponentFixture<ReportOnEfficiencyForOrganisationManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportOnEfficiencyForOrganisationManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportOnEfficiencyForOrganisationManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
