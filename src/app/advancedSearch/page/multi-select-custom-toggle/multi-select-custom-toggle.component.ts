import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-select-custom-toggle',
  templateUrl: './multi-select-custom-toggle.component.html',
  styleUrls: ['./multi-select-custom-toggle.component.scss']
})
export class MultiSelectCustomToggleComponent implements OnInit {

  public selectedFilter: FilteringState;
  constructor() { }

  ngOnInit(): void {
  }

  public checkIsCurrentFilterSelected(filter: FilteringState): boolean {
    return this.selectedFilter == filter;
  }

  public changeSelectedFilter(filter: FilteringState) {
    this.selectedFilter = filter;
  }
}

export enum FilteringState {
  time, company, progress, cost, state, allocation
}
