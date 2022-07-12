import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectControleReportsComponent } from './project-controle-reports.component';

describe('ProjectControleReportsComponent', () => {
  let component: ProjectControleReportsComponent;
  let fixture: ComponentFixture<ProjectControleReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectControleReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectControleReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
