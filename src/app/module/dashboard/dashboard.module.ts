import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from "../../dashboard/page/dashboard/dashboard.component";
import {SharedModule} from "../shared/shared.module";
import {HomeComponent} from "../../dashboard/page/home/home.component";
import {HomeCompanyManagerComponent} from "../../dashboard/page/home-company-manager/home-company-manager.component";
import { MatTooltipModule } from '@angular/material/tooltip';
import {NgxEchartsModule} from "ngx-echarts";
import {TotalChartForOrganizationComponent} from "../../dashboard/page/home/page/total-chart-for-organization/total-chart-for-organization.component";
import {TotalChartForCompanyComponent} from "../../dashboard/page/home-company-manager/page/total-chart-for-company/total-chart-for-company.component";
import { HomeSuperVisorComponent } from 'src/app/dashboard/page/home-super-visor/home-super-visor.component';
import { ChartForHomeSupervisorComponent } from '../../dashboard/page/home-super-visor/page/chart-for-home-supervisor/chart-for-home-supervisor.component';


@NgModule({
    declarations: [
      DashboardComponent,
      HomeComponent,
      HomeCompanyManagerComponent,
      TotalChartForOrganizationComponent,
      TotalChartForCompanyComponent,
      HomeSuperVisorComponent,
      ChartForHomeSupervisorComponent
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SharedModule,
        MatTooltipModule,
      NgxEchartsModule.forRoot({
        echarts: () => import('echarts')
      })
    ]
})
export class DashboardModule { }
