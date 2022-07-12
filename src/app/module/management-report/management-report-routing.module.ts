import { ProjectControleReportsComponent } from './../../managementReport/page/project-controle-reports/project-controle-reports.component';
import { ViewChartFinancialRoportComponent } from './../../managementReport/page/view-chart-financial-roport/view-chart-financial-roport.component';
import { ViewChartProgressRoportComponent } from './../../managementReport/page/view-chart-progress-roport/view-chart-progress-roport.component';
import { SubmitProgressReporterComponent } from './../../managementReport/page/submit-progress-reporter/submit-progress-reporter.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReportOnEfficiencyForOrganisationManagerComponent} from "../../managementReport/page/reportOfCompanyForOrganisationManager/report-on-efficiency-for-organisation-manager/report-on-efficiency-for-organisation-manager.component";

const routes: Routes = [
  {
    path: 'submitProgressReporter', component: SubmitProgressReporterComponent,
  },
  {
    path: 'viewChartProgressRoport', component: ViewChartProgressRoportComponent,
  },
  {
    path: 'viewChartFinancialRoport', component: ViewChartFinancialRoportComponent,
  },
  {
    path: 'reportOnEfficiency', component: ReportOnEfficiencyForOrganisationManagerComponent,
  },
  {
    path: 'projectControleReports', component: ProjectControleReportsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementReportRoutingModule { }
