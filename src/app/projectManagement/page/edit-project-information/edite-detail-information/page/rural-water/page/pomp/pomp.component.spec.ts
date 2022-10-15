import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PompComponent } from './pomp.component';

describe('PompComponent', () => {
  let component: PompComponent;
  let fixture: ComponentFixture<PompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
