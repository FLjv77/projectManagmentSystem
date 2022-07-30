import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitAddActivityProgressFinancialComponent } from './submit-add-activity-progress-financial.component';

describe('SubmitAddActivityProgressFinancialComponent', () => {
  let component: SubmitAddActivityProgressFinancialComponent;
  let fixture: ComponentFixture<SubmitAddActivityProgressFinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitAddActivityProgressFinancialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitAddActivityProgressFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
