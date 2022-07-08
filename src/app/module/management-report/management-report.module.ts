import { ViewChartProgressRoportComponent } from './../../managementReport/page/view-chart-progress-roport/view-chart-progress-roport.component';
import { ViewChartFinancialRoportComponent } from './../../managementReport/page/view-chart-financial-roport/view-chart-financial-roport.component';
import { SharedModule } from './../shared/shared.module';
import { ProgressReportComponent } from './../../managementReport/page/submit-progress-reporter/page/progress-report/progress-report.component';
import { FinancialReportComponent } from './../../managementReport/page/submit-progress-reporter/page/financial-report/financial-report.component';
import { SubmitProgressReporterComponent } from './../../managementReport/page/submit-progress-reporter/submit-progress-reporter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementReportRoutingModule } from './management-report-routing.module';
import {AppComponent} from "../../app.component";
import {ReportOnEfficiencyForOrganisationManagerComponent} from "../../managementReport/page/reportOfCompanyForOrganisationManager/report-on-efficiency-for-organisation-manager/report-on-efficiency-for-organisation-manager.component";
import {ReportOnActivityForOrganisationManagerComponent} from "../../managementReport/page/reportOfCompanyForOrganisationManager/report-on-activity-for-organisation-manager/report-on-activity-for-organisation-manager.component";
import {ReportOnCostForOrganisationManagerComponent} from "../../managementReport/page/reportOfCompanyForOrganisationManager/report-on-cost-for-organisation-manager/report-on-cost-for-organisation-manager.component";
import {NgxEchartsModule} from "ngx-echarts";


@NgModule({
  declarations: [
    SubmitProgressReporterComponent,
    ProgressReportComponent,
    FinancialReportComponent,
    ViewChartProgressRoportComponent,
    ViewChartFinancialRoportComponent,
    ReportOnEfficiencyForOrganisationManagerComponent,
    ReportOnActivityForOrganisationManagerComponent,
    ReportOnCostForOrganisationManagerComponent,
  ],
  imports: [
    CommonModule,
    ManagementReportRoutingModule,
    SharedModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  exports: [
    ProgressReportComponent,
    FinancialReportComponent
  ]
})
export class ManagementReportModule { }
