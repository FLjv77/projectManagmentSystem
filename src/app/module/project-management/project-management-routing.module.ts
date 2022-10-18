import { ChartReportProjectComponent } from './../../projectManagement/page/chart-report-project/chart-report-project.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectListComponent} from "../../projectManagement/page/project-list/project-list.component";
import {EditProjectInformationComponent} from "../../projectManagement/page/edit-project-information/edit-project-information.component";
import { InformationActivityComponent } from 'src/app/projectManagement/page/activity/information-activity/information-activity.component';

const routes: Routes = [
  {
    path: '', component: ProjectListComponent
  },
  {
    path: 'projectList', component: ProjectListComponent
  },
  {
    path: 'editProject', component: EditProjectInformationComponent
  },
  {
    path: 'InformationActivity', component: InformationActivityComponent
  },
  {
    path: 'chart', component: ChartReportProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagementRoutingModule { }
