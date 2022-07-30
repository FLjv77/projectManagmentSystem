import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../../shared/page/component/input-style/input-style.component";

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss','../../project-creation-levels.component.scss']
})
export class UploadImagesComponent implements OnInit {
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

  public getValue(){
    if(this.tiltleImageFormControl.valid && this.tiltleImageFormControl.value && this.imgURL != null){
        return true;
      }
      else{return false}
  }
}
