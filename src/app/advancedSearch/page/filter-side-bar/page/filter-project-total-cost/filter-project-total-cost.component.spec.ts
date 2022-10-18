import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProjectTotalCostComponent } from './filter-project-total-cost.component';

describe('FilterProjectTotalCostComponent', () => {
  let component: FilterProjectTotalCostComponent;
  let fixture: ComponentFixture<FilterProjectTotalCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterProjectTotalCostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterProjectTotalCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
