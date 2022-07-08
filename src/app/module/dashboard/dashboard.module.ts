import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from "../../dashboard/page/dashboard/dashboard.component";
import {SharedModule} from "../shared/shared.module";
import {HomeComponent} from "../../dashboard/page/home/home.component";
import {InprocessingProjectComponent} from "../../dashboard/page/home/projectList/inprocessing-project/inprocessing-project.component";
import {MotamamProjectComponent} from "../../dashboard/page/home/projectList/motamam-project/motamam-project.component";
import {DoneProjectComponent} from "../../dashboard/page/home/projectList/done-project/done-project.component";
import {HomeCompanyManagerComponent} from "../../dashboard/page/home-company-manager/home-company-manager.component";
import {SelectedCompanyListComponent} from "../../dashboard/page/home/companyList/selected-company-list/selected-company-list.component";


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    InprocessingProjectComponent,
    MotamamProjectComponent,
    DoneProjectComponent,
    HomeCompanyManagerComponent,
    SelectedCompanyListComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
