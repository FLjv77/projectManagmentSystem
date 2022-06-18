import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagementSettingMenuComponent } from './project-management-setting-menu.component';

describe('ProjectManagementSettingMenuComponent', () => {
  let component: ProjectManagementSettingMenuComponent;
  let fixture: ComponentFixture<ProjectManagementSettingMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectManagementSettingMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectManagementSettingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
