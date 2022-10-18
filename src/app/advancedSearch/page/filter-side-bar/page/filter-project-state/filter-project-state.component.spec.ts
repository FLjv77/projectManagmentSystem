import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProjectStateComponent } from './filter-project-state.component';

describe('FilterProjectStateComponent', () => {
  let component: FilterProjectStateComponent;
  let fixture: ComponentFixture<FilterProjectStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterProjectStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterProjectStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
