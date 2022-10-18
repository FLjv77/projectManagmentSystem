import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProjectStatus } from 'src/app/advancedSearch/model/advanceSearch';

@Component({
  selector: 'app-filter-project-state',
  templateUrl: './filter-project-state.component.html',
  styleUrls: ['./filter-project-state.component.scss']
})
export class FilterProjectStateComponent implements OnInit {
  @Output() projectStatus = new EventEmitter<ProjectStatus>();

  constructor() { }

  ngOnInit(): void {
  }

  public setProjectState(state: ProjectStatus) {
    this.projectStatus.emit(state);
  }

}
