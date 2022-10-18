import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from 'src/app/gallery/page/ImageList/gallery.component';
import {UploadNewImageForGalleryComponent} from "../../gallery/page/upload-new-image-for-gallery/upload-new-image-for-gallery.component";


@NgModule({
  declarations: [
    GalleryComponent,
    UploadNewImageForGalleryComponent,
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    SharedModule,
  ]
})
export class GalleryModule { }
