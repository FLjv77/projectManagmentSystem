import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineProjectComponent } from './time-line-project.component';

describe('TimeLineProjectComponent', () => {
  let component: TimeLineProjectComponent;
  let fixture: ComponentFixture<TimeLineProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeLineProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeLineProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
