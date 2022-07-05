import { CompanyListComponent } from './../../workSpace/page/company-list/company-list.component';
import { ViewWorkspaceComponent } from './../../workSpace/page/view-workspace/view-workspace.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConfirmRegistredCompanyComponent} from "../../workSpace/page/confirm-registred-company/confirm-registred-company.component";

const routes: Routes = [
  {path: '', component: CompanyListComponent },
  {path: 'companyList', component: CompanyListComponent },
  {path: 'workSpaceProfile', component: ViewWorkspaceComponent },
  {path: 'confirmRegisteredCompany', component: ConfirmRegistredCompanyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
