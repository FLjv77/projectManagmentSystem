import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProjectGeographicalLocationComponent } from './filter-project-geographical-location.component';

describe('FilterProjectGeographicalLocationComponent', () => {
  let component: FilterProjectGeographicalLocationComponent;
  let fixture: ComponentFixture<FilterProjectGeographicalLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterProjectGeographicalLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterProjectGeographicalLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
