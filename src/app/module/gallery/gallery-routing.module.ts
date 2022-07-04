import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from 'src/app/gallery/page/ImageList/gallery.component';
import {UploadNewImageForGalleryComponent} from "../../gallery/page/upload-new-image-for-gallery/upload-new-image-for-gallery.component";

const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'uploadNewImage', component: UploadNewImageForGalleryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
