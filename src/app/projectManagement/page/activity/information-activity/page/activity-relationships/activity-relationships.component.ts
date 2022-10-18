import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-relationships',
  templateUrl: './activity-relationships.component.html',
  styleUrls: ['./activity-relationships.component.scss']
})
export class ActivityRelationshipsComponent implements OnInit {
  public selectedTab: TabState = 0;
  public showGanttChart: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  changeDisplayMode() {
    this.showGanttChart = !this.showGanttChart;
  }

  public changeTabState(state: TabState) {
    this.selectedTab = state;
  }

}
export enum TabState {
  treeMode, detail, gont
}
