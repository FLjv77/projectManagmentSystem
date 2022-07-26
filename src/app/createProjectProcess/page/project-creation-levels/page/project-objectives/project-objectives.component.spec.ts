import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectObjectivesComponent } from './project-objectives.component';

describe('ProjectObjectivesComponent', () => {
  let component: ProjectObjectivesComponent;
  let fixture: ComponentFixture<ProjectObjectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectObjectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
