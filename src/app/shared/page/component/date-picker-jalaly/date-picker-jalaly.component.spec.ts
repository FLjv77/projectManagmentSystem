import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerJalalyComponent } from './date-picker-jalaly.component';

describe('DatePickerJalalyComponent', () => {
  let component: DatePickerJalalyComponent;
  let fixture: ComponentFixture<DatePickerJalalyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatePickerJalalyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerJalalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
