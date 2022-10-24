import { InterUrbanAndInterRuralComponent } from './../../createProjectProcess/page/project-creation-levels/page/pproject-location-information/inter-urban-and-inter-rural/inter-urban-and-inter-rural.component';
import { SpecializedInformationOnEmploymentComponent } from './../../createProjectProcess/page/specializedInformation/specialized-information-on-employment/specialized-information-on-employment.component';
import { SpecializedInformationInTheOfFoodSafetyComponent } from './../../createProjectProcess/page/specializedInformation/specialized-information-in-the-of-food-safety/specialized-information-in-the-of-food-safety.component';
import { ProjectObjectivesComponent } from './../../createProjectProcess/page/project-creation-levels/page/project-objectives/project-objectives.component';
import { PProjectLocationInformationComponent } from './../../createProjectProcess/page/project-creation-levels/page/pproject-location-information/pproject-location-information.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SubActivityComponent } from './../../createProjectProcess/page/project-creation-levels/page/add-activity/page/sub-activity/sub-activity.component';
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
import {MatExpansionModule} from "@angular/material/expansion";
import { MapContainerComponent } from 'src/app/createProjectProcess/page/project-creation-levels/page/pproject-location-information/map-container/map-container.component';
import {KnowledgeBaseInformationComponent} from "../../createProjectProcess/page/specializedInformation/knowledge-base-information/knowledge-base-information.component";
import {SocialTransformationInformationComponent} from "../../createProjectProcess/page/specializedInformation/social-transformation-information/social-transformation-information.component";
import {RevivalOfIndustryInformationComponent} from "../../createProjectProcess/page/specializedInformation/revival-of-industry-information/revival-of-industry-information.component";
import {HealthInformationComponent} from "../../createProjectProcess/page/specializedInformation/health-information/health-information.component";
import {WaterInformationWellTypeComponent} from "../../createProjectProcess/page/specializedInformation/specialized-information-rural-water/page/water-information-well-type/water-information-well-type.component";
import {WaterInformationFountainTypeComponent} from "../../createProjectProcess/page/specializedInformation/specialized-information-rural-water/page/water-information-fountain-type/water-information-fountain-type.component";
import {WaterInformationDamTypeComponent} from "../../createProjectProcess/page/specializedInformation/specialized-information-rural-water/page/water-information-dam-type/water-information-dam-type.component";
import {WaterInformationDistributionNetworkTypeComponent} from "../../createProjectProcess/page/specializedInformation/specialized-information-rural-water/page/water-information-distribution-network-type/water-information-distribution-network-type.component";
import {WaterInformationSourceTypeComponent} from "../../createProjectProcess/page/specializedInformation/specialized-information-rural-water/page/water-information-source-type/water-information-source-type.component";
import {WaterInformationPompTypeComponent} from "../../createProjectProcess/page/specializedInformation/specialized-information-rural-water/page/water-information-pomp-type/water-information-pomp-type.component";
import {WaterInformationPurificationTypeComponent} from "../../createProjectProcess/page/specializedInformation/specialized-information-rural-water/page/water-information-purification-type/water-information-purification-type.component";
import {WaterInformationWaterSealTypeComponent} from "../../createProjectProcess/page/specializedInformation/specialized-information-rural-water/page/water-information-water-seal-type/water-information-water-seal-type.component";
import {WaterInformationTransferLineTypeComponent} from "../../createProjectProcess/page/specializedInformation/specialized-information-rural-water/page/water-information-transfer-line-type/water-information-transfer-line-type.component";
import { MatTreeModule } from '@angular/material/tree';
import { CreateProjectModalComponent } from 'src/app/createProjectProcess/page/project-creation-levels/page/basic-project-information/page/create-project-modal/create-project-modal.component';

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
    SubActivityComponent,
    ProjectObjectivesComponent,
    PProjectLocationInformationComponent,
    KnowledgeBaseInformationComponent,
    SocialTransformationInformationComponent,
    RevivalOfIndustryInformationComponent,
    HealthInformationComponent,
    WaterInformationWellTypeComponent,
    WaterInformationFountainTypeComponent,
    WaterInformationDamTypeComponent,
    WaterInformationDistributionNetworkTypeComponent,
    WaterInformationSourceTypeComponent,
    WaterInformationPompTypeComponent,
    WaterInformationPurificationTypeComponent,
    WaterInformationWaterSealTypeComponent,
    WaterInformationTransferLineTypeComponent,
    SpecializedInformationOnEmploymentComponent,
    SpecializedInformationInTheOfFoodSafetyComponent,
    CreateProjectModalComponent,
    InterUrbanAndInterRuralComponent
  ],
  imports: [
    CommonModule,
    CreateProjectProcessRoutingModule,
    SharedModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  exports: [
  ],
  providers: [
    IranStateAndZoneService,
    TreeDiagramActivityModalComponent,
    CreateProjectModalComponent
  ]
})
export class CreateProjectProcessModule { }
