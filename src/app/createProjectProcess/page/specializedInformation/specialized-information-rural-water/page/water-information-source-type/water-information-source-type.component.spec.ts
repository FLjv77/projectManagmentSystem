import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterInformationSourceTypeComponent } from './water-information-source-type.component';

describe('WaterInformationSourceTypeComponent', () => {
  let component: WaterInformationSourceTypeComponent;
  let fixture: ComponentFixture<WaterInformationSourceTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterInformationSourceTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterInformationSourceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
