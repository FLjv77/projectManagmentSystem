import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-multi-select-custom-toggle',
  templateUrl: './multi-select-custom-toggle.component.html',
  styleUrls: ['./multi-select-custom-toggle.component.scss']
})
export class MultiSelectCustomToggleComponent implements OnInit {

  @Input() selectedValue: FilteringState;
  @Input() title: string;
  public selectedFilter: FilteringState;
  
  constructor(private routing: Router) { }

  ngOnInit(): void {
    this.selectedFilter = this.selectedValue;
  }

  public checkIsCurrentFilterSelected(filter: FilteringState): boolean {
    return this.selectedFilter == filter;
  }

  public changeSelectedFilter(filter: FilteringState) {
    this.selectedFilter = filter;
    switch (filter) {
      case FilteringState.allocation: this.routing.navigate(['advancedSearch/advancedSearchAccordingToAllocation']); break;
      case FilteringState.company: this.routing.navigate(['advancedSearch/advancedSearchAccordingToCompany']); break;
      case FilteringState.cost: this.routing.navigate(['advancedSearch/advancedSearchAccordingToCost']); break;
      case FilteringState.progress: this.routing.navigate(['advancedSearch/advancedSearchAccordingToProgress']); break;
      case FilteringState.state: this.routing.navigate(['advancedSearch/advancedSearchAccordingToState']); break;
      case FilteringState.time: this.routing.navigate(['advancedSearch/advancedSearchAccordingToTime']); break;
    }
  }
}

export enum FilteringState {
  time, company, progress, cost, state, allocation
}
