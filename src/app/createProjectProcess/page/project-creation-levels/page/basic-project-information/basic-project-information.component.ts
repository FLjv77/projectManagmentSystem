import { OutputInfo } from './../../../../model/createProject';
import { FormControl } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {InputCustomStyle} from "../../../../../shared/page/component/input-style/input-style.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-basic-project-information',
  templateUrl: './basic-project-information.component.html',
  styleUrls: ['./basic-project-information.component.scss','../../project-creation-levels.component.scss']
})
export class BasicProjectInformationComponent implements OnInit {

  public projectNameFormControl = new FormControl();
  public projectDeliveryDateFormControl = new FormControl();
  public descreptionFormControl = new FormControl();
  public initialCapitalProjectFormControl = new FormControl();
  public projectProfitFormControl = new FormControl();
  public inputCustomStyle: InputCustomStyle;
  public checkbox: boolean;
  public contributors: string = '';
  public parentId: string = '';
  @Output() basicInputValue = new EventEmitter<aarayStyle>();

  constructor(private router: Router) { }

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
      this.initialCapitalProjectFormControl.value && this.projectProfitFormControl.value && this.contributors != null &&
      this.projectNameFormControl.valid && this.projectDeliveryDateFormControl.valid && this.descreptionFormControl.valid &&
      this.initialCapitalProjectFormControl.valid && this.projectProfitFormControl.valid && this.checkbox != null ){
        return true;
      }
      else{return false}
  }

  public checked(value:boolean){
    this.checkbox = value;
  }

  public setContributors($event: string){
    this.contributors = $event;
  }

  public inputInfo: aarayStyle;
  public goToNext(state: number){
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
