import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDependencyManagementSettingMenuComponent } from './project-dependency-management-setting-menu.component';

describe('ProjectDependencyManagementSettingMenuComponent', () => {
  let component: ProjectDependencyManagementSettingMenuComponent;
  let fixture: ComponentFixture<ProjectDependencyManagementSettingMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDependencyManagementSettingMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDependencyManagementSettingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
