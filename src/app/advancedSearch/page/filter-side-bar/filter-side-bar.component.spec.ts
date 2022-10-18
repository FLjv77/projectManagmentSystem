import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSideBarComponent } from './filter-side-bar.component';

describe('FilterSideBarComponent', () => {
  let component: FilterSideBarComponent;
  let fixture: ComponentFixture<FilterSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
