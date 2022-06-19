import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "../../dashboard/page/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'home', component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
