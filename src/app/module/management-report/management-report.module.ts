import { ViewChartProgressRoportComponent } from './../../managementReport/page/view-chart-progress-roport/view-chart-progress-roport.component';
import { ViewChartFinancialRoportComponent } from './../../managementReport/page/view-chart-financial-roport/view-chart-financial-roport.component';
import { SharedModule } from './../shared/shared.module';
import { ProgressReportComponent } from './../../managementReport/page/submit-progress-reporter/page/progress-report/progress-report.component';
import { FinancialReportComponent } from './../../managementReport/page/submit-progress-reporter/page/financial-report/financial-report.component';
import { SubmitProgressReporterComponent } from './../../managementReport/page/submit-progress-reporter/submit-progress-reporter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementReportRoutingModule } from './management-report-routing.module';


@NgModule({
  declarations: [
    SubmitProgressReporterComponent,
    ProgressReportComponent,
    FinancialReportComponent,
    ViewChartProgressRoportComponent,
    ViewChartFinancialRoportComponent,

  ],
  imports: [
    CommonModule,
    ManagementReportRoutingModule,
    SharedModule
  ],
  exports: [
    ProgressReportComponent,
    FinancialReportComponent
  ]
})
export class ManagementReportModule { }
