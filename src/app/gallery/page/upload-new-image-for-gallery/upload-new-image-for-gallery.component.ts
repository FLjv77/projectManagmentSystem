import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-upload-new-image-for-gallery',
  templateUrl: './upload-new-image-for-gallery.component.html',
  styleUrls: ['./upload-new-image-for-gallery.component.scss',
    '../../../../assets/style/base.scss',
    '../../../createProjectProcess/page/project-creation-levels/page/upload-images/upload-images.component.scss']
})
export class UploadNewImageForGalleryComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public showUploadPhoto = true;
  imgURL: string;
  loading: boolean = false;
  file: File ;
  public tiltleImageFormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.initInputStyle();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  async onChange(event: any) {
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imgURL = reader.result as string;
    }
    reader.readAsDataURL(this.file)
  }

  public onUpload(){}
  public removeSelectedPage() {
    this.imgURL = '';

  }

}
