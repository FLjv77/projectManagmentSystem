import { TreeDiagramActivityModalComponent } from './../../createProjectProcess/page/project-creation-levels/page/add-activity/page/tree-diagram-activity-modal/tree-diagram-activity-modal.component';
import { DevelopmentReportProjectComponent } from './../../createProjectProcess/page/project-creation-levels/page/development-report-project/development-report-project.component';
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
import {SpecializedInformationRuralWaterComponent} from "../../createProjectProcess/page/specializedInformation/specialized-information-rural-water/specialized-information-rural-water.component";
import {SpecializedInformationRemovalMarginalizationComponent} from "../../createProjectProcess/page/specializedInformation/specialized-information-removal-marginalization/specialized-information-removal-marginalization.component";
import {SpecializedInformationRuralWayComponent} from "../../createProjectProcess/page/specializedInformation/specialized-information-rural-way/specialized-information-rural-way.component";
import {SpecializedInformationRuralHousingComponent} from "../../createProjectProcess/page/specializedInformation/specialized-information-rural-housing/specialized-information-rural-housing.component";
import {IranStateAndZoneService} from "../../createProjectProcess/service/iranStateAndZone/iran-state-and-zone.service";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import { MatCheckboxModule } from '@angular/material/checkbox';
import {FinancialReportProjectComponent} from "../../createProjectProcess/page/project-creation-levels/page/financial-report-project/financial-report-project.component";
import {MapContainerComponent} from "../../createProjectProcess/page/project-creation-levels/page/basic-project-information/map-container/map-container.component";
import {MatExpansionModule} from "@angular/material/expansion";

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
    DevelopmentReportProjectComponent,
    SpecializedInformationRuralWaterComponent,
    SpecializedInformationRemovalMarginalizationComponent,
    SpecializedInformationRuralWayComponent,
    SpecializedInformationRuralHousingComponent,
    FinancialReportProjectComponent,
    TreeDiagramActivityModalComponent,
    MapContainerComponent,
  ],
  imports: [
    CommonModule,
    CreateProjectProcessRoutingModule,
    SharedModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatExpansionModule

  ],
  exports: [],
  providers: [
    IranStateAndZoneService,
    TreeDiagramActivityModalComponent
  ]
})
export class CreateProjectProcessModule { }
