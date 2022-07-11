import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-project-total-cost',
  templateUrl: './filter-project-total-cost.component.html',
  styleUrls: ['./filter-project-total-cost.component.scss', '../../../advanced-search-according-to-allocation/advanced-search-according-to-allocation.component.scss']
})
export class FilterProjectTotalCostComponent implements OnInit {
  public maxValue: number = 0;
  public minValue: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  public formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000);
    }
    return value;
  }
}
