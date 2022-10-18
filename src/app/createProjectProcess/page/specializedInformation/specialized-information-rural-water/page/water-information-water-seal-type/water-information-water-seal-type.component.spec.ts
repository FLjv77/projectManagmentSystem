import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterInformationWaterSealTypeComponent } from './water-information-water-seal-type.component';

describe('WaterInformationWaterSealTypeComponent', () => {
  let component: WaterInformationWaterSealTypeComponent;
  let fixture: ComponentFixture<WaterInformationWaterSealTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterInformationWaterSealTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterInformationWaterSealTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
