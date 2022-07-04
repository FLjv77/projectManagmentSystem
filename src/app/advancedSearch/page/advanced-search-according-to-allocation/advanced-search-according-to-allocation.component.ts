import { Allocation } from './../../model/advanceSearch';
import { Component, OnInit } from '@angular/core';
import {DisplayPathModel} from "../../../shared/model/displayPathModel";

@Component({
  selector: 'app-advanced-search-according-to-allocation',
  templateUrl: './advanced-search-according-to-allocation.component.html',
  styleUrls: ['./advanced-search-according-to-allocation.component.scss']
})
export class AdvancedSearchAccordingToAllocationComponent implements OnInit {
  public allocation: Allocation;
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;

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
