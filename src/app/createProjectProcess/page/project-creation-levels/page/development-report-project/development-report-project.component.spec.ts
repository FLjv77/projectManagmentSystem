import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentReportProjectComponent } from './development-report-project.component';

describe('DevelopmentReportProjectComponent', () => {
  let component: DevelopmentReportProjectComponent;
  let fixture: ComponentFixture<DevelopmentReportProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopmentReportProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentReportProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
