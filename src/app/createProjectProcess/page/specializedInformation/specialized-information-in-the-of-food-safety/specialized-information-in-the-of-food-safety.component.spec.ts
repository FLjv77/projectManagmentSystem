import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializedInformationInTheOfFoodSafetyComponent } from './specialized-information-in-the-of-food-safety.component';

describe('SpecializedInformationInTheOfFoodSafetyComponent', () => {
  let component: SpecializedInformationInTheOfFoodSafetyComponent;
  let fixture: ComponentFixture<SpecializedInformationInTheOfFoodSafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecializedInformationInTheOfFoodSafetyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecializedInformationInTheOfFoodSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
