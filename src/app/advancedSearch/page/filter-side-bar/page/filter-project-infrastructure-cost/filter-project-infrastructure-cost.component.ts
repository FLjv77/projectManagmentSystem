import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-project-infrastructure-cost',
  templateUrl: './filter-project-infrastructure-cost.component.html',
  styleUrls: ['./filter-project-infrastructure-cost.component.scss', '../../../advanced-search-according-to-allocation/advanced-search-according-to-allocation.component.scss']
})
export class FilterProjectInfrastructureCostComponent implements OnInit {

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
