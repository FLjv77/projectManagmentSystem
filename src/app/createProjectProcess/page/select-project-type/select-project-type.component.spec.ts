import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProjectTypeComponent } from './select-project-type.component';

describe('SelectProjectTypeComponent', () => {
  let component: SelectProjectTypeComponent;
  let fixture: ComponentFixture<SelectProjectTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectProjectTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectProjectTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
