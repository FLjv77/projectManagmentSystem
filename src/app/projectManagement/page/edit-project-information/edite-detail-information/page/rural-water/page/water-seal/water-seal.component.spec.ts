import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterSealComponent } from './water-seal.component';

describe('WaterSealComponent', () => {
  let component: WaterSealComponent;
  let fixture: ComponentFixture<WaterSealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterSealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterSealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
