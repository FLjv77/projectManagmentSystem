import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeProgressReportInformationComponent } from './edite-progress-report-information.component';

describe('EditeProgressReportInformationComponent', () => {
  let component: EditeProgressReportInformationComponent;
  let fixture: ComponentFixture<EditeProgressReportInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeProgressReportInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditeProgressReportInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
