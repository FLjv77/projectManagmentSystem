import { Allocation } from './../../model/advanceSearch';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-search-according-to-allocation',
  templateUrl: './advanced-search-according-to-allocation.component.html',
  styleUrls: ['./advanced-search-according-to-allocation.component.scss']
})
export class AdvancedSearchAccordingToAllocationComponent implements OnInit {
  public allocation: Allocation;
  constructor() { }

  ngOnInit(): void {
  }

  public setCostState(state: number) {

  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000);
    }
    return value;
  }
  public setAllocation(state: Allocation){
    this.allocation = state;
  }
}
