import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleManagementUsersComponent } from './role-management-users.component';

describe('ManagementUsersComponent', () => {
  let component: RoleManagementUsersComponent;
  let fixture: ComponentFixture<RoleManagementUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleManagementUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleManagementUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
