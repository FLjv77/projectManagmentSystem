import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellComponent } from './well.component';

describe('WellComponent', () => {
  let component: WellComponent;
  let fixture: ComponentFixture<WellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
