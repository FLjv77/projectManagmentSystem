import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializedInformationRuralWaterComponent } from './specialized-information-rural-water.component';

describe('SpecializedInformationRuralWaterComponent', () => {
  let component: SpecializedInformationRuralWaterComponent;
  let fixture: ComponentFixture<SpecializedInformationRuralWaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecializedInformationRuralWaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializedInformationRuralWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
