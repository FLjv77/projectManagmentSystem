import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "../../dashboard/page/dashboard/dashboard.component";
import {HomeComponent} from "../../dashboard/page/home/home.component";
import {HomeCompanyManagerComponent} from "../../dashboard/page/home-company-manager/home-company-manager.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent,

  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'homeCompany', component: HomeCompanyManagerComponent
  },
  {
    path: 'statistic', component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
