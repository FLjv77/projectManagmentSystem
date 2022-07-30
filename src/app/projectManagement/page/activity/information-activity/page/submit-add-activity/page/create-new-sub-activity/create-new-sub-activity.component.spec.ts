import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewSubActivityComponent } from './create-new-sub-activity.component';

describe('CreateNewSubActivityComponent', () => {
  let component: CreateNewSubActivityComponent;
  let fixture: ComponentFixture<CreateNewSubActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewSubActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewSubActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
