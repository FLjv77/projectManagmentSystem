import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializedInformationRuralWayComponent } from './specialized-information-rural-way.component';

describe('SpecializedInformationRuralWayComponent', () => {
  let component: SpecializedInformationRuralWayComponent;
  let fixture: ComponentFixture<SpecializedInformationRuralWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecializedInformationRuralWayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializedInformationRuralWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
