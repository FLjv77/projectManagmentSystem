import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterInformationWellTypeComponent } from './water-information-well-type.component';

describe('WaterInformationWellTypeComponent', () => {
  let component: WaterInformationWellTypeComponent;
  let fixture: ComponentFixture<WaterInformationWellTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterInformationWellTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterInformationWellTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
