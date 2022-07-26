import { ManagementReportModule } from './module/management-report/management-report.module';
import { UserManagementModule } from './module/user-management/user-management.module';
import { WorkspaceModule } from './module/workspace/workspace.module';
import { GalleryModule } from './module/gallery/gallery.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./module/shared/shared.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxEchartsModule} from "ngx-echarts";
import {AuthModule} from "./module/auth/auth.module";
import { WaterInformationWellTypeComponent } from './createProjectProcess/page/specializedInformation/specialized-information-rural-water/page/water-information-well-type/water-information-well-type.component';
import { WaterInformationFountainTypeComponent } from './createProjectProcess/page/specializedInformation/specialized-information-rural-water/page/water-information-fountain-type/water-information-fountain-type.component';
import { WaterInformationDamTypeComponent } from './createProjectProcess/page/specializedInformation/specialized-information-rural-water/page/water-information-dam-type/water-information-dam-type.component';
import { WaterInformationDistributionNetworkTypeComponent } from './createProjectProcess/page/specializedInformation/specialized-information-rural-water/page/water-information-distribution-network-type/water-information-distribution-network-type.component';
import { WaterInformationSourceTypeComponent } from './createProjectProcess/page/specializedInformation/specialized-information-rural-water/page/water-information-source-type/water-information-source-type.component';
import { WaterInformationPompTypeComponent } from './createProjectProcess/page/specializedInformation/specialized-information-rural-water/page/water-information-pomp-type/water-information-pomp-type.component';
import { WaterInformationPurificationTypeComponent } from './createProjectProcess/page/specializedInformation/specialized-information-rural-water/page/water-information-purification-type/water-information-purification-type.component';
import { WaterInformationWaterSealTypeComponent } from './createProjectProcess/page/specializedInformation/specialized-information-rural-water/page/water-information-water-seal-type/water-information-water-seal-type.component';
import { WaterInformationTransferLineTypeComponent } from './createProjectProcess/page/specializedInformation/specialized-information-rural-water/page/water-information-transfer-line-type/water-information-transfer-line-type.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    SharedModule,
    AuthModule,
    GalleryModule,
    BrowserAnimationsModule,
    WorkspaceModule,
    UserManagementModule,
    ManagementReportModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
