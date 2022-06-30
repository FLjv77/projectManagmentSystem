import { WorkspaceModule } from './module/workspace/workspace.module';
import { GalleryModule } from './module/gallery/gallery.module';
import { AdvancedSearchModule } from './module/advanced-search/advanced-search.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./module/shared/shared.module";
import { AuthModule } from "./module/auth/auth.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    GalleryModule,
    BrowserAnimationsModule,
    WorkspaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
