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

@NgModule({
  declarations: [
    ViewWorkspaceComponent,
    CompanyListComponent,
    AddCompanyModalComponent,
    ConfirmRegistredCompanyComponent,
    ConfirmedRegistredCompanyModalComponent
  ],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    SharedModule,
    MatRadioModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
    }),
  ],
  exports: [
    AddCompanyModalComponent,
    ConfirmedRegistredCompanyModalComponent
  ]
})
export class WorkspaceModule { }
