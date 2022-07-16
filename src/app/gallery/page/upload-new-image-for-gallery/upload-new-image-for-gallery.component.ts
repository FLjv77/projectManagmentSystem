import { DisplayPathModel } from './../../../shared/model/displayPathModel';
import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-upload-new-image-for-gallery',
  templateUrl: './upload-new-image-for-gallery.component.html',
  styleUrls: ['./upload-new-image-for-gallery.component.scss',
    '../../../../assets/style/base.scss',
    '../../../createProjectProcess/page/project-creation-levels/page/upload-images/upload-images.component.scss',
    '../../../createProjectProcess/page/project-creation-levels/project-creation-levels.component.scss']
})
export class UploadNewImageForGalleryComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public showUploadPhoto = true;
  public imgURL: string;
  public loading: boolean = false;
  public filePath: string;
  public file: File ;
  public tiltleImageFormControl = new FormControl();
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;

  constructor() { }

  ngOnInit(): void {
    this.initInputStyle();
    this.initDisplayPath();
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
      if (event.target.files[0].type.indexOf('application') > -1) {
        this.imgURL = '../../../../assets/icon/gallery/uploadedFile.svg';
      } else if (event.target.files[0].type.indexOf('audio') > -1) {
        this.imgURL = '../../../../assets/icon/gallery/voice.svg';
      } else if (event.target.files[0].type.indexOf('video') > -1) {
        this.imgURL = '../../../../assets/icon/gallery/videocam.svg';
      } else {
        this.imgURL = reader.result as string;
      }
      this.filePath = event.target.files[0].name;
    }
    reader.readAsDataURL(this.file)
  }

  public onUpload(){}
  public removeSelectedPage() {
    this.imgURL = '';
    this.filePath = '';
  }
  private initDisplayPath() {
    this.path1 = new DisplayPathModel('گالری', false, '');
    this.path2 = new DisplayPathModel('آپلود تصویر', false, '');
  }

}
