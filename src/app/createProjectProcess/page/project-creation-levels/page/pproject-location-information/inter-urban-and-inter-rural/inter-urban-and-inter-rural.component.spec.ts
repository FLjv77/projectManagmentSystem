import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterUrbanAndInterRuralComponent } from './inter-urban-and-inter-rural.component';

describe('InterUrbanAndInterRuralComponent', () => {
  let component: InterUrbanAndInterRuralComponent;
  let fixture: ComponentFixture<InterUrbanAndInterRuralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterUrbanAndInterRuralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterUrbanAndInterRuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
