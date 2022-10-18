import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputStyleComponent } from './input-style.component';

describe('InputStyleComponent', () => {
  let component: InputStyleComponent;
  let fixture: ComponentFixture<InputStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
