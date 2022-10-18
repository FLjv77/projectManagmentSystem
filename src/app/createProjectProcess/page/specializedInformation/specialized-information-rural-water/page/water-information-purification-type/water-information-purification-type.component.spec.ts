import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterInformationPurificationTypeComponent } from './water-information-purification-type.component';

describe('WaterInformationPurificationTypeComponent', () => {
  let component: WaterInformationPurificationTypeComponent;
  let fixture: ComponentFixture<WaterInformationPurificationTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterInformationPurificationTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterInformationPurificationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
