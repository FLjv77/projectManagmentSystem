import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProjectHumanResourceCostComponent } from './filter-project-human-resource-cost.component';

describe('FilterProjectHumanResourceCostComponent', () => {
  let component: FilterProjectHumanResourceCostComponent;
  let fixture: ComponentFixture<FilterProjectHumanResourceCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterProjectHumanResourceCostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterProjectHumanResourceCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
