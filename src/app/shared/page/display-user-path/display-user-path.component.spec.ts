import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayUserPathComponent } from './display-user-path.component';

describe('DisplayUserPathComponent', () => {
  let component: DisplayUserPathComponent;
  let fixture: ComponentFixture<DisplayUserPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayUserPathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayUserPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
