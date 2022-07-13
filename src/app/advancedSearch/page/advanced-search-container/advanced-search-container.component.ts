import { Component, OnInit } from '@angular/core';
import {DisplayPathModel} from "../../../shared/model/displayPathModel";
import {ReportState} from "../../model/advanceSearch";

@Component({
  selector: 'app-advanced-search-container',
  templateUrl: './advanced-search-container.component.html',
  styleUrls: ['./advanced-search-container.component.scss',
    '../../../managementReport/page/reportOfCompanyForOrganisationManager/report-on-efficiency-for-organisation-manager/report-on-efficiency-for-organisation-manager.component.scss',
    '../../../../assets/style/base.scss', '../../../shared/page/drop-down-project-list/drop-down-project-list.component.scss']
})
export class AdvancedSearchContainerComponent implements OnInit {
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public showChart: boolean = true;
  public optionsIncome: any;
  public reportState: ReportState = 0;

  constructor() { }

  ngOnInit(): void {
    this.initDisplayPath();
  }

  public setReportState(state: ReportState) {
    this.reportState = state;
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت پروژه', false, '');
    this.path2 = new DisplayPathModel('جستجو پیشرفته', false, '');
  }

  public changeShowChart(value: boolean) {
    this.showChart = value;
  }
}
