import { OutputInfo } from '../../../../model/createProjectModel/createProject';
import { FormControl } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {InputCustomStyle} from "../../../../../shared/page/component/input-style/input-style.component";
import {Router} from "@angular/router";
import { CommonDataForCreateProjectService } from 'src/app/createProjectProcess/service/commonData/commonDataForCreateProject/common-data-for-create-project.service';

@Component({
  selector: 'app-basic-project-information',
  templateUrl: './basic-project-information.component.html',
  styleUrls: ['./basic-project-information.component.scss','../../project-creation-levels.component.scss']
})
export class BasicProjectInformationComponent implements OnInit {

  public projectNameFormControl = new FormControl();
  public projectDeliveryDateFormControl = new FormControl();
  public projectStartDateFormControl = new FormControl();
  public descreptionFormControl = new FormControl();
  public infrastructureCostFormControl = new FormControl();
  public humanResourceCostFormControl = new FormControl();
  public inputCustomStyle: InputCustomStyle;
  public checkbox: boolean;
  public contributors: string = '';
  public parentId: string = '';
  @Output() basicInputValue = new EventEmitter<aarayStyle>();

  constructor(private commonDataForCreateProjectService: CommonDataForCreateProjectService) { }

  ngOnInit(): void {
    this.initInputStyle();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public getValue(){
    if(this.projectNameFormControl.value && this.projectDeliveryDateFormControl.value && this.descreptionFormControl.value &&
      this.infrastructureCostFormControl.value && this.humanResourceCostFormControl.value && this.contributors != null &&
      this.projectNameFormControl.valid && this.projectDeliveryDateFormControl.valid && this.descreptionFormControl.valid &&
      this.infrastructureCostFormControl.valid && this.humanResourceCostFormControl.valid && this.checkbox != null ){
        return true;
      }
      else {
        return false;
      }
  }

  public checked(value:boolean){
    this.checkbox = value;
  }

  public setContributors($event: string){
    this.contributors = $event;
  }

  public inputInfo: aarayStyle;
  public goToNext(state: number) {
    this.commonDataForCreateProjectService.setBasicInformationProject(
      this.checkbox ? 'parentIdProject' : '',
      this.projectNameFormControl.value,
      this.descreptionFormControl.value,
      this.projectDeliveryDateFormControl.value,
      this.infrastructureCostFormControl.value,
      this.humanResourceCostFormControl.value,
      [], this.projectStartDateFormControl.value
    );
    /*
    let hhh = new OutputInfo([],1);
    this.inputInfo = new aarayStyle(hhh,0,0);
    this.inputInfo.info.inputs.push(this.projectNameFormControl.value);
    this.inputInfo.info.inputs.push(this.projectDeliveryDateFormControl.value);
    this.inputInfo.info.inputs.push(this.descreptionFormControl.value);
    this.inputInfo.info.inputs.push(this.contributors);
    this.inputInfo.info.inputs.push(this.parentId);
    this.inputInfo.infrastructureCost = this.initialCapitalProjectFormControl.value;
    this.inputInfo.humanResourceCost = this.projectProfitFormControl.value;
    this.inputInfo.info.state = state;
    this.basicInputValue.emit(this.inputInfo);
    */


  }

  public setParentId($event: string){
    this.parentId = $event;
  }

}

export class aarayStyle{
  constructor(public info : OutputInfo,public infrastructureCost: number,public humanResourceCost: number){
    this.info = info;
    this.infrastructureCost = infrastructureCost;
    this.humanResourceCost = humanResourceCost;
  }
}
