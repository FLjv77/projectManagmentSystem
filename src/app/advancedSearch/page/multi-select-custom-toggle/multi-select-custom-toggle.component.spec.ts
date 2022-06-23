import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectCustomToggleComponent } from './multi-select-custom-toggle.component';

describe('MultiSelectCustomToggleComponent', () => {
  let component: MultiSelectCustomToggleComponent;
  let fixture: ComponentFixture<MultiSelectCustomToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSelectCustomToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectCustomToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
