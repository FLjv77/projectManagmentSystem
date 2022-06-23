import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedSearchAccordingToCostComponent } from './advanced-search-according-to-cost.component';

describe('AdvancedSearchAccordingToCostComponent', () => {
  let component: AdvancedSearchAccordingToCostComponent;
  let fixture: ComponentFixture<AdvancedSearchAccordingToCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedSearchAccordingToCostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedSearchAccordingToCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
