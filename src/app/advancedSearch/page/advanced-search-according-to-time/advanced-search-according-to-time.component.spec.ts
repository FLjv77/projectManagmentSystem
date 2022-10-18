import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedSearchAccordingToTimeComponent } from './advanced-search-according-to-time.component';

describe('AdvancedSearchAccordingToTimeComponent', () => {
  let component: AdvancedSearchAccordingToTimeComponent;
  let fixture: ComponentFixture<AdvancedSearchAccordingToTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedSearchAccordingToTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedSearchAccordingToTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
