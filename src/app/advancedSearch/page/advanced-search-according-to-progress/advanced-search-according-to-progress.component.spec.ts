import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedSearchAccordingToProgressComponent } from './advanced-search-according-to-progress.component';

describe('AdvancedSearchAccordingToProgressComponent', () => {
  let component: AdvancedSearchAccordingToProgressComponent;
  let fixture: ComponentFixture<AdvancedSearchAccordingToProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedSearchAccordingToProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedSearchAccordingToProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
