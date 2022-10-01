import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {InputCustomStyle} from "../../../../shared/page/component/input-style/input-style.component";
import {ActivatedRoute, Router} from "@angular/router";
import { ProjectConnectToApiService } from 'src/app/projectManagement/service/project/projectConnectToApi/project-connect-to-api.service';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { ProjectSelectedDTO } from 'src/app/projectManagement/model/project/projectDto';

@Component({
  selector: 'app-edit-basic-information',
  templateUrl: './edit-basic-information.component.html',
  styleUrls: ['./edit-basic-information.component.scss', '../../../../createProjectProcess/page/project-creation-levels/project-creation-levels.component.scss']
})
export class EditBasicInformationComponent implements OnInit {
  public projectNameFormControl = new FormControl();
  public projectDeliveryDateFormControl = new FormControl();
  public descreptionFormControl = new FormControl();
  public initialCapitalProjectFormControl = new FormControl();
  public projectProfitFormControl = new FormControl();
  public addressFormControl = new FormControl();
  public LocationFormControl = new FormControl();
  public inputCustomStyle: InputCustomStyle;
  public projectId: string | null;

  constructor(private router: Router, private activeRoute: ActivatedRoute,
              private projectConnectToApiService :ProjectConnectToApiService) { }

  ngOnInit(): void {
    this.initInputStyle();
    this.getQuryParam();
    this.getInfo();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public getValue(){
    if(this.projectNameFormControl.value && this.projectDeliveryDateFormControl.value && this.descreptionFormControl.value &&
      this.initialCapitalProjectFormControl.value && this.projectProfitFormControl.value && this.addressFormControl.value &&
      this.LocationFormControl.value &&
      this.projectNameFormControl.valid && this.projectDeliveryDateFormControl.valid && this.descreptionFormControl.valid &&
      this.initialCapitalProjectFormControl.valid && this.projectProfitFormControl.valid && this.addressFormControl.valid &&
      this.LocationFormControl.valid){
      return true;
    }
    else{return false}
  }

  public goOnMap() {
    this.router.navigate(['../../createProject/selectLocationOnMap']);
  }

  public getQuryParam(){
    this.projectId = this.activeRoute.snapshot.queryParamMap.get('projectId');
    console.log(this.projectId);
  }

  public getInfo(){
    this.projectConnectToApiService.getProjectGeneralProperties(this.projectId)
    .subscribe((res: ApiResult<ProjectSelectedDTO>)=>{console.log(res.data)});
  }
}
