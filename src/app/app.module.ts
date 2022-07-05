import { ManagementReportModule } from './module/management-report/management-report.module';
import { UserManagementModule } from './module/user-management/user-management.module';
import { WorkspaceModule } from './module/workspace/workspace.module';
import { GalleryModule } from './module/gallery/gallery.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./module/shared/shared.module";
import { AuthModule } from "./module/auth/auth.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InformationActivityComponent } from './createProjectProcess/page/activity/information-activity/information-activity.component';
import { ActivityRelationshipsComponent } from './createProjectProcess/page/activity/information-activity/page/activity-relationships/activity-relationships.component';
import { DependencyActivitiesComponent } from './createProjectProcess/page/activity/information-activity/page/dependency-activities/dependency-activities.component';
import { ReportActivitiesComponent } from './createProjectProcess/page/activity/information-activity/page/report-activities/report-activities.component';
import { FinancialReportActivityComponent } from './createProjectProcess/page/activity/information-activity/page/report-activities/page/financial-report-activity/financial-report-activity.component';
import { ProgressReportActivityComponent } from './createProjectProcess/page/activity/information-activity/page/report-activities/page/progress-report-activity/progress-report-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    InformationActivityComponent,
    ActivityRelationshipsComponent,
    DependencyActivitiesComponent,
    ReportActivitiesComponent,
    FinancialReportActivityComponent,
    ProgressReportActivityComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    GalleryModule,
    BrowserAnimationsModule,
    WorkspaceModule,
    UserManagementModule,
    ManagementReportModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
