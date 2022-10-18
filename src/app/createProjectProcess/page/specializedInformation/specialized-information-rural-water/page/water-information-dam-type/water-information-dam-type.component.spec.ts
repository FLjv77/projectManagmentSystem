import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterInformationDamTypeComponent } from './water-information-dam-type.component';

describe('WaterInformationDamTypeComponent', () => {
  let component: WaterInformationDamTypeComponent;
  let fixture: ComponentFixture<WaterInformationDamTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterInformationDamTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterInformationDamTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
