import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedSearchAccordingToCompanyComponent } from './advanced-search-according-to-company.component';

describe('AdvancedSearchAccordingToCompanyComponent', () => {
  let component: AdvancedSearchAccordingToCompanyComponent;
  let fixture: ComponentFixture<AdvancedSearchAccordingToCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedSearchAccordingToCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedSearchAccordingToCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
