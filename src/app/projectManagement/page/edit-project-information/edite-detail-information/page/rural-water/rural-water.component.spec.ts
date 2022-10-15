import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuralWaterComponent } from './rural-water.component';

describe('RuralWaterComponent', () => {
  let component: RuralWaterComponent;
  let fixture: ComponentFixture<RuralWaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuralWaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuralWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
