import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholderManagementComponent } from './stakeholder-management.component';

describe('StakeholderManagementComponent', () => {
  let component: StakeholderManagementComponent;
  let fixture: ComponentFixture<StakeholderManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakeholderManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
