import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeDiagramActivityModalComponent } from './tree-diagram-activity-modal.component';

describe('TreeDiagramActivityModalComponent', () => {
  let component: TreeDiagramActivityModalComponent;
  let fixture: ComponentFixture<TreeDiagramActivityModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeDiagramActivityModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeDiagramActivityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
