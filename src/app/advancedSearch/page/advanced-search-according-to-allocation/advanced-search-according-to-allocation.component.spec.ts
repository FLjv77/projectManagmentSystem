import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedSearchAccordingToAllocationComponent } from './advanced-search-according-to-allocation.component';

describe('AdvancedSearchAccordingToAllocationComponent', () => {
  let component: AdvancedSearchAccordingToAllocationComponent;
  let fixture: ComponentFixture<AdvancedSearchAccordingToAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedSearchAccordingToAllocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedSearchAccordingToAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
