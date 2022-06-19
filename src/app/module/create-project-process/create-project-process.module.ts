import { ProjectCreationLevelsComponent } from './../../createProjectProcess/page/project-creation-levels/project-creation-levels.component';
import { StepCreateProjectComponent } from './../../createProjectProcess/page/step-create-project/step-create-project.component';
import { SelectProjectTypeComponent } from 'src/app/createProjectProcess/page/select-project-type/select-project-type.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateProjectProcessRoutingModule } from './create-project-process-routing.module';


@NgModule({
  declarations: [
    SelectProjectTypeComponent,
    StepCreateProjectComponent,
    ProjectCreationLevelsComponent
  ],
  imports: [
    CommonModule,
    CreateProjectProcessRoutingModule,
    SharedModule
  ],
  exports: [],
})
export class CreateProjectProcessModule { }
