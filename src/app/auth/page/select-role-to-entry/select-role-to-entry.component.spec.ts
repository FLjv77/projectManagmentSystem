import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRoleToEntryComponent } from './select-role-to-entry.component';

describe('SelectRoleToEntryComponent', () => {
  let component: SelectRoleToEntryComponent;
  let fixture: ComponentFixture<SelectRoleToEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectRoleToEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectRoleToEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
