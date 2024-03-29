import { HandleDisplayErrorService } from 'src/app/shared/service/handleError/handle-display-error.service';
import { AlertDialogBySweetAlertService } from 'src/app/shared/service/alertDialog/alert-dialog-by-sweet-alert.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ResourceInformation } from './../../../../createProjectProcess/model/createProjectModel/createProject';
import { CreaterojectService } from 'src/app/createProjectProcess/service/projectCreationLevels/createroject.service';
import { ProjectSelectedDTO } from 'src/app/projectManagement/model/project/projectDto';
import { ApiResult } from './../../../../auth/model/authDTO';
import { ProjectConnectToApiService } from 'src/app/projectManagement/service/project/projectConnectToApi/project-connect-to-api.service';
import { AdvancedSearchConnecctToApiService } from 'src/app/advancedSearch/service/advancedSearchConnecctToApi/advanced-search-connecct-to-api.service';
import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import {InputCustomStyle} from "../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-edit-recovery-informationormation',
  templateUrl: './edit-recovery-informationormation.component.html',
  styleUrls: ['./edit-recovery-informationormation.component.scss',
    '../../../../createProjectProcess/page/project-creation-levels/project-creation-levels.component.scss']
})
export class EditRecoveryInformationormationComponent implements OnInit,AfterViewInit {
  public inputCustomStyle: InputCustomStyle;
  public resourceNameFormControl = new FormControl();
  public addressResourceFormControl = new FormControl();
  public TimeResourceFormControl = new FormControl();
  public projectIdSelect: string|string[];
  @Input() projectId: string | string[];
  public edit:boolean=false;

  constructor(private advancedSearchConnecctToApiService:AdvancedSearchConnecctToApiService,
              private projectConnectToApiService:ProjectConnectToApiService,
              private createrojectService:CreaterojectService,
              private handleError: HandleDisplayErrorService,
              private alertDialogBySweetAlertService:AlertDialogBySweetAlertService) { }


  ngOnInit(): void {
    this.initInputStyle();
    this.getInfo();
    document.getElementById('1')?.ariaDisabled;
    document.getElementById('2')?.ariaDisabled;
  }

  ngAfterViewInit(): void {
    this.advancedSearchConnecctToApiService.projectIdSelected.subscribe((res: string | string[])=>{
      this.projectIdSelect = res;
      if (this.projectIdSelect) {
        console.log(this.projectIdSelect);
        this.projectConnectToApiService.getProjectGeneralPropertiesSelect(this.projectIdSelect)
        .subscribe((res: ApiResult<ProjectSelectedDTO>)=>{
        this.resourceNameFormControl.setValue(res.data.resourceName);
        this.addressResourceFormControl.setValue(res.data.resourceApiAddress);
      });
      }
    })
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }
  public saved(){
    let data=new ResourceInformation(this.resourceNameFormControl.value,this.addressResourceFormControl.value);
    this.createrojectService.ModifyProjectResourceInformation1(
      this.projectId, data).subscribe((res: ApiResult<boolean>) => {
        if(res.statusCode == 200 && res.isSuccess) {
          this.edit = false;
          this.alertDialogBySweetAlertService.showSuccessAlert('با موفقیت ویرایش شد');
        } else {
          this.handleError.showError(res.statusCode);
        }
    },(err: HttpErrorResponse) => {
      this.handleError.showError(err.status);
    });
  }

  public editForm(){
    this.edit = true;
  }
  
  public getValue(){
    if(this.resourceNameFormControl.value && this.addressResourceFormControl.value && this.TimeResourceFormControl.value &&
      this.resourceNameFormControl.valid && this.addressResourceFormControl.valid && this.TimeResourceFormControl.valid){
      return true;
    }
    else{return false}
  }

  public getInfo(){
    if (this.projectId) {
      this.projectConnectToApiService.getProjectGeneralPropertiesSelect(this.projectId)
    .subscribe((res: ApiResult<ProjectSelectedDTO>)=>{
      
      this.resourceNameFormControl.setValue(res.data.resourceName);
      this.addressResourceFormControl.setValue(res.data.resourceApiAddress);
    });
    }
  }
}
