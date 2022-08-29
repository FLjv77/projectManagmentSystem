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
import { AuthInterceptor } from './interseptor/interseptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
