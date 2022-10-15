import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamComponent } from './dam.component';

describe('DamComponent', () => {
  let component: DamComponent;
  let fixture: ComponentFixture<DamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
