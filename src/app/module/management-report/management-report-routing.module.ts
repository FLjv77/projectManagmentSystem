import { SubmitProgressReporterComponent } from './../../managementReport/page/submit-progress-reporter/submit-progress-reporter.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: SubmitProgressReporterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementReportRoutingModule { }
