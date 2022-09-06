import { CreateNewActivityComponent } from './../../projectManagement/page/activity/information-activity/page/submit-add-activity/page/create-new-activity/create-new-activity.component';
import { CreateNewSubActivityComponent } from './../../projectManagement/page/activity/information-activity/page/submit-add-activity/page/create-new-sub-activity/create-new-sub-activity.component';
import { SubmitAddActivityComponent } from './../../projectManagement/page/activity/information-activity/page/submit-add-activity/submit-add-activity.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ChartReportProjectComponent } from './../../projectManagement/page/chart-report-project/chart-report-project.component';
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
import {MatExpansionModule} from '@angular/material/expansion';
import { ProgressReportActivityComponent } from 'src/app/projectManagement/page/activity/information-activity/page/progress-report-activity/progress-report-activity.component';
import {NgxEchartsModule} from "ngx-echarts";
import {ActivityRelationshipsTreeModeComponent} from "../../projectManagement/page/activity/information-activity/page/activity-relationships-tree-mode/activity-relationships-tree-mode.component";
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {TimeLineChartActivityComponent} from "../../projectManagement/page/activity/information-activity/page/time-line-chart-activity/time-line-chart-activity.component";
import {ActivityByDetailComponent} from "../../projectManagement/page/activity/information-activity/page/activity-by-detail/activity-by-detail.component";

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
    ChartReportProjectComponent,
    ActivityRelationshipsTreeModeComponent,
    TimeLineChartActivityComponent,
    ActivityByDetailComponent,
    CreateNewActivityComponent,
    CreateNewSubActivityComponent,
    SubmitAddActivityComponent
  ],
  imports: [
    CommonModule,
    ProjectManagementRoutingModule,
    SharedModule,
    NgCircleProgressModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTooltipModule,
    MatExpansionModule,
    MatTreeModule,
    MatIconModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  exports: [
    ActivityRelationshipsComponent,
    DependencyActivitiesComponent,
    FinancialReportActivityComponent,
    ProgressReportActivityComponent,
    RecordFinancialReportModalComponent,
    RecordProgressReportModalComponent,
    ProjectListComponent
  ]
})
export class ProjectManagementModule { }
