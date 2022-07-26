import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownActivitiesComponent } from './drop-down-activities.component';

describe('DropDownActivitiesComponent', () => {
  let component: DropDownActivitiesComponent;
  let fixture: ComponentFixture<DropDownActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDownActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropDownActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
