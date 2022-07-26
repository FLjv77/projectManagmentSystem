import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityByDetailComponent } from './activity-by-detail.component';

describe('ActivityByDetailComponent', () => {
  let component: ActivityByDetailComponent;
  let fixture: ComponentFixture<ActivityByDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityByDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityByDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
