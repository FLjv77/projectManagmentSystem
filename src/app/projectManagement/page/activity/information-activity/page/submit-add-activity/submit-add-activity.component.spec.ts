import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitAddActivityComponent } from './submit-add-activity.component';

describe('SubmitAddActivityComponent', () => {
  let component: SubmitAddActivityComponent;
  let fixture: ComponentFixture<SubmitAddActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitAddActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitAddActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
