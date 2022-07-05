import { ProgressReportActivityComponent } from './../../createProjectProcess/page/activity/information-activity/page/report-activities/page/progress-report-activity/progress-report-activity.component';
import { FinancialReportActivityComponent } from './../../createProjectProcess/page/activity/information-activity/page/report-activities/page/financial-report-activity/financial-report-activity.component';
import { ReportActivitiesComponent } from './../../createProjectProcess/page/activity/information-activity/page/report-activities/report-activities.component';
import { DependencyActivitiesComponent } from './../../createProjectProcess/page/activity/information-activity/page/dependency-activities/dependency-activities.component';
import { ActivityRelationshipsComponent } from './../../createProjectProcess/page/activity/information-activity/page/activity-relationships/activity-relationships.component';
import { InformationActivityComponent } from './../../createProjectProcess/page/activity/information-activity/information-activity.component';
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
    InformationActivityComponent,
    ActivityRelationshipsComponent,
    DependencyActivitiesComponent,
    ReportActivitiesComponent,
    FinancialReportActivityComponent,
    ProgressReportActivityComponent,
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
