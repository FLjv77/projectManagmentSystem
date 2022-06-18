import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressStyleComponent } from './progress-style.component';

describe('ProgressStyleComponent', () => {
  let component: ProgressStyleComponent;
  let fixture: ComponentFixture<ProgressStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
