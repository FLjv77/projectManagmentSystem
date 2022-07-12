import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedReportsComponent } from './checked-reports.component';

describe('CheckedReportsComponent', () => {
  let component: CheckedReportsComponent;
  let fixture: ComponentFixture<CheckedReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckedReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckedReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
