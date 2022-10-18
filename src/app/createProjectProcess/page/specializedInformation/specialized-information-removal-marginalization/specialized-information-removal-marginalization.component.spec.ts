import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializedInformationRemovalMarginalizationComponent } from './specialized-information-removal-marginalization.component';

describe('SpecializedInformationRemovalMarginalizationComponent', () => {
  let component: SpecializedInformationRemovalMarginalizationComponent;
  let fixture: ComponentFixture<SpecializedInformationRemovalMarginalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecializedInformationRemovalMarginalizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializedInformationRemovalMarginalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
