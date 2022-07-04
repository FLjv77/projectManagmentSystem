import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitProgressReporterComponent } from './submit-progress-reporter.component';

describe('SubmitProgressReporterComponent', () => {
  let component: SubmitProgressReporterComponent;
  let fixture: ComponentFixture<SubmitProgressReporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitProgressReporterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitProgressReporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
