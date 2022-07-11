import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProjectInfrastructureCostComponent } from './filter-project-infrastructure-cost.component';

describe('FilterProjectInfrastructureCostComponent', () => {
  let component: FilterProjectInfrastructureCostComponent;
  let fixture: ComponentFixture<FilterProjectInfrastructureCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterProjectInfrastructureCostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterProjectInfrastructureCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
