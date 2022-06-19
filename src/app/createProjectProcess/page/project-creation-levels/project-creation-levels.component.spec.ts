import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCreationLevelsComponent } from './project-creation-levels.component';

describe('ProjectCreationLevelsComponent', () => {
  let component: ProjectCreationLevelsComponent;
  let fixture: ComponentFixture<ProjectCreationLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCreationLevelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCreationLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
