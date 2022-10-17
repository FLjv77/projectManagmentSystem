import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../../shared/page/component/input-style/input-style.component";
import { ActivatedRoute, Router } from '@angular/router';
import { CreaterojectService } from 'src/app/createProjectProcess/service/projectCreationLevels/createroject.service';
import { ApiResult } from '../../../../../auth/model/authDTO';
import { CompanySelectedDTO } from 'src/app/workSpace/model/companyModel';
import { url } from '../../../../../../assets/url/url';
import { CommonDataForCreateProjectService } from 'src/app/createProjectProcess/service/commonData/commonDataForCreateProject/common-data-for-create-project.service';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss','../../project-creation-levels.component.scss']
})
export class UploadImagesComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public showUploadPhoto = true;
  private companyId: string;
  imgURL: string;
  loading: boolean = false;
  file: File ;
  public tiltleImageFormControl = new FormControl();
  public projectId: string;

  constructor(
    private createrojectService: CreaterojectService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private commonDataForCreateProjectService: CommonDataForCreateProjectService
  ) { }

  ngOnInit(): void {
    this.initInputStyle();
    this.setCompanyId();
    this.getQuery();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  private getQuery(){
    let id = this.activeRoute.snapshot.queryParamMap.get("projectId");
    if (id) this.projectId = id;
  }

  async onChange(event: any) {
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imgURL = reader.result as string;
    }
    reader.readAsDataURL(this.file)
  }

  private setCompanyId() {
    let com = localStorage.getItem(url.CompanyInfo);
    if(com) {
      let c = new CompanySelectedDTO();
      c = JSON.parse(com);
      this.companyId = c.companyId;
    } else {
      let idC = this.activeRoute.snapshot.queryParamMap.get('companyId');
      if(idC) this.companyId = idC;
    }
  }

  public onUpload(){
    this.loading = true;
    this.createrojectService.UploadDocumentsOfProject(this.projectId, this.file)
      .subscribe((res: ApiResult<boolean>) => {
        this.commonDataForCreateProjectService.selectStep.emit(6);

        setTimeout(() => {
          document.getElementById('recoveryResources')?.click();
        }, 200);
      });
  }

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
