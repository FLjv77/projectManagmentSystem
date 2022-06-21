import { UploadImagesComponent } from './../../createProjectProcess/page/project-creation-levels/page/upload-images/upload-images.component';
import { AddActivityComponent } from './../../createProjectProcess/page/project-creation-levels/page/add-activity/add-activity.component';
import { RecoveryResourcesComponent } from './../../createProjectProcess/page/project-creation-levels/page/recovery-resources/recovery-resources.component';
import { StakeholderManagementComponent } from './../../createProjectProcess/page/project-creation-levels/page/stakeholder-management/stakeholder-management.component';
import { BasicProjectInformationComponent } from './../../createProjectProcess/page/project-creation-levels/page/basic-project-information/basic-project-information.component';
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
    ProjectCreationLevelsComponent,
    BasicProjectInformationComponent,
    StakeholderManagementComponent,
    RecoveryResourcesComponent,
    AddActivityComponent,
    UploadImagesComponent,
  ],
  imports: [
    CommonModule,
    CreateProjectProcessRoutingModule,
    SharedModule,
    ],
  exports: [],
})
export class CreateProjectProcessModule { }
