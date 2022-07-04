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
    FinancialReportComponent
  ],
  imports: [
    CommonModule,
    ManagementReportRoutingModule
  ],
  exports: [
    ProgressReportComponent,
    FinancialReportComponent
  ]
})
export class ManagementReportModule { }
