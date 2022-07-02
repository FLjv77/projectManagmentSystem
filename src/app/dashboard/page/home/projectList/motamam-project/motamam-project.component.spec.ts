import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotamamProjectComponent } from './motamam-project.component';

describe('MotamamProjectComponent', () => {
  let component: MotamamProjectComponent;
  let fixture: ComponentFixture<MotamamProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotamamProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotamamProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
