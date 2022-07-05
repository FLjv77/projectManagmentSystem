import { DisplayPathModel } from './../../../shared/model/displayPathModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-chart-financial-roport',
  templateUrl: './view-chart-financial-roport.component.html',
  styleUrls: ['./view-chart-financial-roport.component.scss']
})
export class ViewChartFinancialRoportComponent implements OnInit {

  public path1: DisplayPathModel;
  public path2: DisplayPathModel;

  constructor() { }

  ngOnInit(): void {
    this.initDisplayPath();
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت پروژه', false, '');
    this.path2 = new DisplayPathModel('گزارش پیشرفت پروژه', false, '');
  }

}
