import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepCreateProjectComponent } from './step-create-project.component';

describe('StepCreateProjectComponent', () => {
  let component: StepCreateProjectComponent;
  let fixture: ComponentFixture<StepCreateProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepCreateProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepCreateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
