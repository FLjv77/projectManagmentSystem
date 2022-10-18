import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementSettingMenuComponent } from './user-management-setting-menu.component';

describe('UserManagementSettingMenuComponent', () => {
  let component: UserManagementSettingMenuComponent;
  let fixture: ComponentFixture<UserManagementSettingMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserManagementSettingMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementSettingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
