import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterInformationDistributionNetworkTypeComponent } from './water-information-distribution-network-type.component';

describe('WaterInformationDistributionNetworkTypeComponent', () => {
  let component: WaterInformationDistributionNetworkTypeComponent;
  let fixture: ComponentFixture<WaterInformationDistributionNetworkTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterInformationDistributionNetworkTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterInformationDistributionNetworkTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
