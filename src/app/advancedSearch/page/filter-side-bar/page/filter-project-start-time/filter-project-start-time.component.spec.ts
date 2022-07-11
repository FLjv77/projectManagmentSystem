import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProjectStartTimeComponent } from './filter-project-start-time.component';

describe('FilterProjectStartTimeComponent', () => {
  let component: FilterProjectStartTimeComponent;
  let fixture: ComponentFixture<FilterProjectStartTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterProjectStartTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterProjectStartTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
