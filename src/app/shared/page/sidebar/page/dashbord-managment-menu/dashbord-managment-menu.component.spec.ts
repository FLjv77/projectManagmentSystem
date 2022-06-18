import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordManagmentMenuComponent } from './dashbord-managment-menu.component';

describe('DashbordManagmentMenuComponent', () => {
  let component: DashbordManagmentMenuComponent;
  let fixture: ComponentFixture<DashbordManagmentMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordManagmentMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordManagmentMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
