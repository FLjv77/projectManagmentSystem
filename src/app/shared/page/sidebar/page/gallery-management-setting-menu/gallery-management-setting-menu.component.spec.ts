import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryManagementSettingMenuComponent } from './gallery-management-setting-menu.component';

describe('GalleryManagementSettingMenuComponent', () => {
  let component: GalleryManagementSettingMenuComponent;
  let fixture: ComponentFixture<GalleryManagementSettingMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryManagementSettingMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryManagementSettingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
