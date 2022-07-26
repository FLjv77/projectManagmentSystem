import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterInformationTransferLineTypeComponent } from './water-information-transfer-line-type.component';

describe('WaterInformationTransferLineTypeComponent', () => {
  let component: WaterInformationTransferLineTypeComponent;
  let fixture: ComponentFixture<WaterInformationTransferLineTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterInformationTransferLineTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterInformationTransferLineTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
