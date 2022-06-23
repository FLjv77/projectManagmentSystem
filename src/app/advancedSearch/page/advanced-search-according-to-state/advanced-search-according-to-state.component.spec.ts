import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedSearchAccordingToStateComponent } from './advanced-search-according-to-state.component';

describe('AdvancedSearchAccordingToStateComponent', () => {
  let component: AdvancedSearchAccordingToStateComponent;
  let fixture: ComponentFixture<AdvancedSearchAccordingToStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedSearchAccordingToStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedSearchAccordingToStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
