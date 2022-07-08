import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportOnActivityForOrganisationManagerComponent } from './report-on-activity-for-organisation-manager.component';

describe('ReportOnActivityForOrganisationManagerComponent', () => {
  let component: ReportOnActivityForOrganisationManagerComponent;
  let fixture: ComponentFixture<ReportOnActivityForOrganisationManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportOnActivityForOrganisationManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportOnActivityForOrganisationManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
