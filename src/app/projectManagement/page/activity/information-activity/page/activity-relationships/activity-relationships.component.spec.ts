import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityRelationshipsComponent } from './activity-relationships.component';

describe('ActivityRelationshipsComponent', () => {
  let component: ActivityRelationshipsComponent;
  let fixture: ComponentFixture<ActivityRelationshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityRelationshipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityRelationshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
