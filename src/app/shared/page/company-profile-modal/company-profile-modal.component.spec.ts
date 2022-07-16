import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileModalComponent } from './company-profile-modal.component';

describe('CompanyProfileModalComponent', () => {
  let component: CompanyProfileModalComponent;
  let fixture: ComponentFixture<CompanyProfileModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyProfileModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyProfileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
