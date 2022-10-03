import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-project-type',
  templateUrl: './filter-project-type.component.html',
  styleUrls: ['./filter-project-type.component.scss']
})
export class FilterProjectTypeComponent implements OnInit {
  @Output() projectType = new EventEmitter<string>;

  constructor() { }

  ngOnInit(): void {
  }

  public setProjectType(type: string) {
    this.projectType.emit(type);
  }
}
