import { SharedModule } from './../shared/shared.module';
import { ViewWorkspaceComponent } from './../../workSpace/page/view-workspace/view-workspace.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { WorkspaceRoutingModule } from './workspace-routing.module';


@NgModule({
  declarations: [
    ViewWorkspaceComponent
  ],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    SharedModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    })
  ]
})
export class WorkspaceModule { }
