import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyActivitiesComponent } from './dependency-activities.component';

describe('DependencyActivitiesComponent', () => {
  let component: DependencyActivitiesComponent;
  let fixture: ComponentFixture<DependencyActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependencyActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
