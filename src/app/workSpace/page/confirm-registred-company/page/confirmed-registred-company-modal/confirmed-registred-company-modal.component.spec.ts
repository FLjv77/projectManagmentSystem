import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedRegistredCompanyModalComponent } from './confirmed-registred-company-modal.component';

describe('ConfirmedRegistredCompanyModalComponent', () => {
  let component: ConfirmedRegistredCompanyModalComponent;
  let fixture: ComponentFixture<ConfirmedRegistredCompanyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmedRegistredCompanyModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedRegistredCompanyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
