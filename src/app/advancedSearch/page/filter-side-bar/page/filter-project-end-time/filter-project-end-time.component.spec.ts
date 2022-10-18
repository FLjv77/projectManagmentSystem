import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProjectEndTimeComponent } from './filter-project-end-time.component';

describe('FilterProjectEndTimeComponent', () => {
  let component: FilterProjectEndTimeComponent;
  let fixture: ComponentFixture<FilterProjectEndTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterProjectEndTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterProjectEndTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
