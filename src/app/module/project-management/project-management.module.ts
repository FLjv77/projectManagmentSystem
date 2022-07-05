import { RecordFinancialReportModalComponent } from './../../projectManagement/page/activity/information-activity/page/financial-report-activity/page/record-financial-report-modal/record-financial-report-modal.component';
import { RecordProgressReportModalComponent } from './../../projectManagement/page/activity/information-activity/page/progress-report-activity/page/record-progress-report-modal/record-progress-report-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectManagementRoutingModule } from './project-management-routing.module';
import {ProjectListComponent} from "../../projectManagement/page/project-list/project-list.component";
import {SharedModule} from "../shared/shared.module";
import {NgCircleProgressModule} from "ng-circle-progress";
import {EditProjectInformationComponent} from "../../projectManagement/page/edit-project-information/edit-project-information.component";
import {EditBasicInformationComponent} from "../../projectManagement/page/edit-project-information/edit-basic-information/edit-basic-information.component";
import {EditeDetailInformationComponent} from "../../projectManagement/page/edit-project-information/edite-detail-information/edite-detail-information.component";
import {EditeActivityInformationComponent} from "../../projectManagement/page/edit-project-information/edite-activity-information/edite-activity-information.component";
import {EditeFinancialReportInformationComponent} from "../../projectManagement/page/edit-project-information/edite-financial-report-information/edite-financial-report-information.component";
import {EditeProgressReportInformationComponent} from "../../projectManagement/page/edit-project-information/edite-progress-report-information/edite-progress-report-information.component";
import {EditRecoveryInformationormationComponent} from "../../projectManagement/page/edit-project-information/edit-recovery-informationormation/edit-recovery-informationormation.component";
import {EditDeveloperInformationormationComponent} from "../../projectManagement/page/edit-project-information/edit-developer-informationormation/edit-developer-informationormation.component";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {InformationActivityComponent} from "../../projectManagement/page/activity/information-activity/information-activity.component";
import {FinancialReportActivityComponent} from "../../projectManagement/page/activity/information-activity/page/financial-report-activity/financial-report-activity.component";
import {DependencyActivitiesComponent} from "../../projectManagement/page/activity/information-activity/page/dependency-activities/dependency-activities.component";
import {ActivityRelationshipsComponent} from "../../projectManagement/page/activity/information-activity/page/activity-relationships/activity-relationships.component";
import { ProgressReportActivityComponent } from 'src/app/projectManagement/page/activity/information-activity/page/progress-report-activity/progress-report-activity.component';

@NgModule({
  declarations: [
    ProjectListComponent,
    EditProjectInformationComponent,
    EditBasicInformationComponent,
    EditeDetailInformationComponent,
    EditeActivityInformationComponent,
    EditeFinancialReportInformationComponent,
    EditeProgressReportInformationComponent,
    EditRecoveryInformationormationComponent,
    EditDeveloperInformationormationComponent,
    InformationActivityComponent,
    ActivityRelationshipsComponent,
    DependencyActivitiesComponent,
    FinancialReportActivityComponent,
    ProgressReportActivityComponent,
    RecordFinancialReportModalComponent,
    RecordProgressReportModalComponent,
  ],
  imports: [
    CommonModule,
    ProjectManagementRoutingModule,
    SharedModule,
    NgCircleProgressModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  exports: [
    ActivityRelationshipsComponent,
    DependencyActivitiesComponent,
    FinancialReportActivityComponent,
    ProgressReportActivityComponent,
    RecordFinancialReportModalComponent,
    RecordProgressReportModalComponent,
  ]
})
export class ProjectManagementModule { }
