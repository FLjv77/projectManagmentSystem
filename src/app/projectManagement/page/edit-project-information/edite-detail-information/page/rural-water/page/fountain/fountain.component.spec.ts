import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FountainComponent } from './fountain.component';

describe('FountainComponent', () => {
  let component: FountainComponent;
  let fixture: ComponentFixture<FountainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FountainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FountainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
