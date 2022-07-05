import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordProgressReportModalComponent } from './record-progress-report-modal.component';

describe('RecordProgressReportModalComponent', () => {
  let component: RecordProgressReportModalComponent;
  let fixture: ComponentFixture<RecordProgressReportModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordProgressReportModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordProgressReportModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
