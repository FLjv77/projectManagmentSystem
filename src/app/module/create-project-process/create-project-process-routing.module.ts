import { SelectProjectTypeComponent } from 'src/app/createProjectProcess/page/select-project-type/select-project-type.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectCreationLevelsComponent } from 'src/app/createProjectProcess/page/project-creation-levels/project-creation-levels.component';

const routes: Routes = [
  {
    path: 'selectProjectType', component: SelectProjectTypeComponent
  },
  {
    path: 'startCreatProject', component: ProjectCreationLevelsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateProjectProcessRoutingModule { }
