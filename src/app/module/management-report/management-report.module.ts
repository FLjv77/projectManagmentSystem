import { SubmitProgressReporterComponent } from './../../managementReport/page/submit-progress-reporter/submit-progress-reporter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementReportRoutingModule } from './management-report-routing.module';


@NgModule({
  declarations: [
    SubmitProgressReporterComponent
  ],
  imports: [
    CommonModule,
    ManagementReportRoutingModule
  ]
})
export class ManagementReportModule { }
