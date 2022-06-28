import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-search-according-to-progress',
  templateUrl: './advanced-search-according-to-progress.component.html',
  styleUrls: ['./advanced-search-according-to-progress.component.scss',
  '../advanced-search-according-to-allocation/advanced-search-according-to-allocation.component.scss']
})
export class AdvancedSearchAccordingToProgressComponent implements OnInit {

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
}
