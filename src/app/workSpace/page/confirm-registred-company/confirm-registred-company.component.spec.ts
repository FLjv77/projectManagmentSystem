import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmRegistredCompanyComponent } from './confirm-registred-company.component';

describe('ConfirmRegistredCompanyComponent', () => {
  let component: ConfirmRegistredCompanyComponent;
  let fixture: ComponentFixture<ConfirmRegistredCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmRegistredCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmRegistredCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
