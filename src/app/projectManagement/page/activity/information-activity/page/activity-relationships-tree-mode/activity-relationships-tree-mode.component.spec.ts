import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityRelationshipsTreeModeComponent } from './activity-relationships-tree-mode.component';

describe('ActivityRelationshipsTreeModeComponent', () => {
  let component: ActivityRelationshipsTreeModeComponent;
  let fixture: ComponentFixture<ActivityRelationshipsTreeModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityRelationshipsTreeModeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityRelationshipsTreeModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
