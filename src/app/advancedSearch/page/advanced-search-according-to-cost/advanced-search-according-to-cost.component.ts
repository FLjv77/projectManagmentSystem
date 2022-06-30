import { Cost } from './../../model/advanceSearch';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-search-according-to-cost',
  templateUrl: './advanced-search-according-to-cost.component.html',
  styleUrls: ['./advanced-search-according-to-cost.component.scss',
   '../advanced-search-according-to-allocation/advanced-search-according-to-allocation.component.scss']
})
export class AdvancedSearchAccordingToCostComponent implements OnInit {
  public cost: Cost;

  constructor() { }

  ngOnInit(): void {
  }
  public setCostState(state: number) {}

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000);
    }
    return value;
  }

  setCost(state: Cost){
    this.cost = state;
  }
}
