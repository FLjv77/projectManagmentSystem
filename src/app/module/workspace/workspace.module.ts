import { MatTooltipModule } from '@angular/material/tooltip';
import { ConfirmedRegistredCompanyModalComponent } from './../../workSpace/page/confirm-registred-company/page/confirmed-registred-company-modal/confirmed-registred-company-modal.component';
import { AddCompanyModalComponent } from './../../workSpace/page/company-list/page/add-company-modal/add-company-modal.component';
import { CompanyListComponent } from './../../workSpace/page/company-list/company-list.component';
import { SharedModule } from './../shared/shared.module';
import { ViewWorkspaceComponent } from './../../workSpace/page/view-workspace/view-workspace.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import { MatRadioModule } from '@angular/material/radio';
import {ConfirmRegistredCompanyComponent} from "../../workSpace/page/confirm-registred-company/confirm-registred-company.component";
import {NgxDailyGanttChartModule} from "ngx-daily-gantt-chart";
import { TimeLineProjectComponent } from 'src/app/workSpace/page/view-workspace/page/time-line-project/time-line-project.component';
import {HighchartsChartModule} from "highcharts-angular";

@NgModule({
  declarations: [
    ViewWorkspaceComponent,
    CompanyListComponent,
    AddCompanyModalComponent,
    ConfirmRegistredCompanyComponent,
    ConfirmedRegistredCompanyModalComponent,
    TimeLineProjectComponent,
  ],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    SharedModule,
    MatRadioModule,
    MatTooltipModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
    }),
    NgxDailyGanttChartModule,
    HighchartsChartModule
  ],
  exports: [
    AddCompanyModalComponent,
    ConfirmedRegistredCompanyModalComponent,
    TimeLineProjectComponent,
  ]
})
export class WorkspaceModule { }
