import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss','../../project-creation-levels.component.scss']
})
export class UploadImagesComponent implements OnInit {

  public showUploadPhoto=true;
  imgURL: string;
  //userProfile: profile;
  loading: boolean = false;
  file: File ;
  public tiltleImageFormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  async onChange(event:any) {}

  public onUpload(){}
  public noUpload(){}
}
