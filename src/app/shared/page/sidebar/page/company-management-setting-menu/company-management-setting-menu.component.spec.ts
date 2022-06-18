import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyManagementSettingMenuComponent } from './company-management-setting-menu.component';

describe('CompanyManagementSettingMenuComponent', () => {
  let component: CompanyManagementSettingMenuComponent;
  let fixture: ComponentFixture<CompanyManagementSettingMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyManagementSettingMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyManagementSettingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
