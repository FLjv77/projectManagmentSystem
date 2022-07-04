import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectListComponent} from "../../projectManagement/page/project-list/project-list.component";
import {EditProjectInformationComponent} from "../../projectManagement/page/edit-project-information/edit-project-information.component";

const routes: Routes = [
  {
    path: '', component: ProjectListComponent
  },
  {
    path: 'projectList', component: ProjectListComponent
  },
  {
    path: 'editProject', component: EditProjectInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagementRoutingModule { }
