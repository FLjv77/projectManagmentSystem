import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCompanyManagerComponent } from './home-company-manager.component';

describe('HomeCompanyManagerComponent', () => {
  let component: HomeCompanyManagerComponent;
  let fixture: ComponentFixture<HomeCompanyManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCompanyManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCompanyManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
