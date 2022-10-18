import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterInformationFountainTypeComponent } from './water-information-fountain-type.component';

describe('WaterInformationFountainTypeComponent', () => {
  let component: WaterInformationFountainTypeComponent;
  let fixture: ComponentFixture<WaterInformationFountainTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterInformationFountainTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterInformationFountainTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
