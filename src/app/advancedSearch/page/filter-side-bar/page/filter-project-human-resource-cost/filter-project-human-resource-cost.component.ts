import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-project-human-resource-cost',
  templateUrl: './filter-project-human-resource-cost.component.html',
  styleUrls: ['./filter-project-human-resource-cost.component.scss', '../../../advanced-search-according-to-allocation/advanced-search-according-to-allocation.component.scss']
})
export class FilterProjectHumanResourceCostComponent implements OnInit {
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