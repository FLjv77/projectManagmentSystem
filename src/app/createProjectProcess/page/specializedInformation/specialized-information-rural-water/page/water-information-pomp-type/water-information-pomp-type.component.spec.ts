import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterInformationPompTypeComponent } from './water-information-pomp-type.component';

describe('WaterInformationPompTypeComponent', () => {
  let component: WaterInformationPompTypeComponent;
  let fixture: ComponentFixture<WaterInformationPompTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterInformationPompTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterInformationPompTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
