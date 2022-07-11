import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProjectTypeComponent } from './filter-project-type.component';

describe('FilterProjectTypeComponent', () => {
  let component: FilterProjectTypeComponent;
  let fixture: ComponentFixture<FilterProjectTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterProjectTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterProjectTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
