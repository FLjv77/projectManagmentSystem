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
import {FinancialReportActivityComponent} from "../../projectManagement/page/activity/information-activity/page/report-activities/page/financial-report-activity/financial-report-activity.component";
import {ProgressReportActivityComponent} from "../../projectManagement/page/activity/information-activity/page/report-activities/page/progress-report-activity/progress-report-activity.component";
import {ReportActivitiesComponent} from "../../projectManagement/page/activity/information-activity/page/report-activities/report-activities.component";
import {DependencyActivitiesComponent} from "../../projectManagement/page/activity/information-activity/page/dependency-activities/dependency-activities.component";
import {ActivityRelationshipsComponent} from "../../projectManagement/page/activity/information-activity/page/activity-relationships/activity-relationships.component";

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
    ReportActivitiesComponent,
    FinancialReportActivityComponent,
    ProgressReportActivityComponent,
  ],
  imports: [
    CommonModule,
    ProjectManagementRoutingModule,
    SharedModule,
    NgCircleProgressModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
  ]
})
export class ProjectManagementModule { }
