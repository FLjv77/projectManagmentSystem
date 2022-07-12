import { ProjectManagementModule } from './../project-management/project-management.module';
import { CheckedReportsComponent } from './../../managementReport/page/project-controle-reports/page/checked-reports/checked-reports.component';
import { UnreviewedReportsComponent } from './../../managementReport/page/project-controle-reports/page/unreviewed-reports/unreviewed-reports.component';
import { ProjectControleReportsComponent } from './../../managementReport/page/project-controle-reports/project-controle-reports.component';
import { MatIconModule } from '@angular/material/icon';
import { ViewChartProgressRoportComponent } from './../../managementReport/page/view-chart-progress-roport/view-chart-progress-roport.component';
import { ViewChartFinancialRoportComponent } from './../../managementReport/page/view-chart-financial-roport/view-chart-financial-roport.component';
import { SharedModule } from './../shared/shared.module';
import { ProgressReportComponent } from './../../managementReport/page/submit-progress-reporter/page/progress-report/progress-report.component';
import { FinancialReportComponent } from './../../managementReport/page/submit-progress-reporter/page/financial-report/financial-report.component';
import { SubmitProgressReporterComponent } from './../../managementReport/page/submit-progress-reporter/submit-progress-reporter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementReportRoutingModule } from './management-report-routing.module';
import {ReportOnEfficiencyForOrganisationManagerComponent} from "../../managementReport/page/reportOfCompanyForOrganisationManager/report-on-efficiency-for-organisation-manager/report-on-efficiency-for-organisation-manager.component";
import {ReportOnActivityForOrganisationManagerComponent} from "../../managementReport/page/reportOfCompanyForOrganisationManager/report-on-activity-for-organisation-manager/report-on-activity-for-organisation-manager.component";
import {ReportOnCostForOrganisationManagerComponent} from "../../managementReport/page/reportOfCompanyForOrganisationManager/report-on-cost-for-organisation-manager/report-on-cost-for-organisation-manager.component";
import {NgxEchartsModule} from "ngx-echarts";
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatTreeModule} from '@angular/material/tree';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';



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
    ProjectControleReportsComponent,
    CheckedReportsComponent,
    UnreviewedReportsComponent,
  ],
  imports: [
    CommonModule,
    ManagementReportRoutingModule,
    SharedModule,
    MatIconModule,
    MatTreeModule,
    FormsModule,
    MatFormFieldModule,
    ProjectManagementModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  exports: [
    ProgressReportComponent,
    FinancialReportComponent,
    CheckedReportsComponent,
    UnreviewedReportsComponent,
  ]
})
export class ManagementReportModule { }
