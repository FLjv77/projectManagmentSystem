import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "../../dashboard/page/dashboard/dashboard.component";
import {HomeComponent} from "../../dashboard/page/home/home.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent,

  },
  {
    path: 'home', component: HomeComponent
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
