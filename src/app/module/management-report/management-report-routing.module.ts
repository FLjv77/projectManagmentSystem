import { ViewChartFinancialRoportComponent } from './../../managementReport/page/view-chart-financial-roport/view-chart-financial-roport.component';
import { ViewChartProgressRoportComponent } from './../../managementReport/page/view-chart-progress-roport/view-chart-progress-roport.component';
import { SubmitProgressReporterComponent } from './../../managementReport/page/submit-progress-reporter/submit-progress-reporter.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: SubmitProgressReporterComponent,
  },
  {
    path: 'ViewChartProgressRoport', component: ViewChartProgressRoportComponent,
  },
  {
    path: 'ViewChartFinancialRoport', component: ViewChartFinancialRoportComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementReportRoutingModule { }
