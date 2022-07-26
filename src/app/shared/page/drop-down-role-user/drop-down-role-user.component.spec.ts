import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownRoleUserComponent } from './drop-down-role-user.component';

describe('DropDownRoleUserComponent', () => {
  let component: DropDownRoleUserComponent;
  let fixture: ComponentFixture<DropDownRoleUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDownRoleUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropDownRoleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
