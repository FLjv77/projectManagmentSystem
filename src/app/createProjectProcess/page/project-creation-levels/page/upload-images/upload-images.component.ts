import { UntypedFormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../../shared/page/component/input-style/input-style.component";

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss','../../project-creation-levels.component.scss']
})
export class UploadImagesComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public showUploadPhoto=true;
  imgURL: string;
  loading: boolean = false;
  file: File ;
  public tiltleImageFormControl = new UntypedFormControl();

  constructor() { }

  ngOnInit(): void {
    this.initInputStyle();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  async onChange(event:any) {}

  public onUpload(){}
  public noUpload(){}
}
