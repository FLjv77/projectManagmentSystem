import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewActivityComponent } from './create-new-activity.component';

describe('CreateNewActivityComponent', () => {
  let component: CreateNewActivityComponent;
  let fixture: ComponentFixture<CreateNewActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
