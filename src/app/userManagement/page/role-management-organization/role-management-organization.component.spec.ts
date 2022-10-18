import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleManagementOrganizationComponent } from './role-management-organization.component';

describe('RoleManagementOrganizationComponent', () => {
  let component: RoleManagementOrganizationComponent;
  let fixture: ComponentFixture<RoleManagementOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleManagementOrganizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleManagementOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
