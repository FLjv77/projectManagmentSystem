import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializedInformationRuralHousingComponent } from './specialized-information-rural-housing.component';

describe('SpecializedInformationRuralHousingComponent', () => {
  let component: SpecializedInformationRuralHousingComponent;
  let fixture: ComponentFixture<SpecializedInformationRuralHousingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecializedInformationRuralHousingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializedInformationRuralHousingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
