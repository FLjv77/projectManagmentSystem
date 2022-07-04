import { AddCompanyModalComponent } from './../../workSpace/page/company-list/page/add-company-modal/add-company-modal.component';
import { CompanyListComponent } from './../../workSpace/page/company-list/company-list.component';
import { SharedModule } from './../shared/shared.module';
import { ViewWorkspaceComponent } from './../../workSpace/page/view-workspace/view-workspace.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    ViewWorkspaceComponent,
    CompanyListComponent,
    AddCompanyModalComponent
  ],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    SharedModule,
    MatRadioModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
    })
  ],
  exports: [
    AddCompanyModalComponent
  ]
})
export class WorkspaceModule { }
