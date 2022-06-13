import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralBackGroundComponent } from './general-back-ground.component';

describe('GeneralBackGroundComponent', () => {
  let component: GeneralBackGroundComponent;
  let fixture: ComponentFixture<GeneralBackGroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralBackGroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralBackGroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
