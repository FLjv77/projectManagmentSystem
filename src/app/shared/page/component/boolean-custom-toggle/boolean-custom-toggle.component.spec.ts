import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooleanCustomToggleComponent } from './boolean-custom-toggle.component';

describe('BooleanCustomToggleComponent', () => {
  let component: BooleanCustomToggleComponent;
  let fixture: ComponentFixture<BooleanCustomToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooleanCustomToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooleanCustomToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
