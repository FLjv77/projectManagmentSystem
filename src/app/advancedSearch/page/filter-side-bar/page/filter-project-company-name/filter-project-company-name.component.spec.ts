import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProjectCompanyNameComponent } from './filter-project-company-name.component';

describe('FilterProjectCompanyNameComponent', () => {
  let component: FilterProjectCompanyNameComponent;
  let fixture: ComponentFixture<FilterProjectCompanyNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterProjectCompanyNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterProjectCompanyNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
