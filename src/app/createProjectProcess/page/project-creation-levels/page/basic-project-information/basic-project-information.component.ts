import { CompanySelectedDTO } from 'src/app/workSpace/model/companyModel';
import { url } from 'src/assets/url/url';
import { OutputInfo } from '../../../../model/createProjectModel/createProject';
import { FormControl } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {InputCustomStyle} from "../../../../../shared/page/component/input-style/input-style.component";
import {ActivatedRoute, Router} from "@angular/router";
import { CommonDataForCreateProjectService } from 'src/app/createProjectProcess/service/commonData/commonDataForCreateProject/common-data-for-create-project.service';

@Component({
  selector: 'app-basic-project-information',
  templateUrl: './basic-project-information.component.html',
  styleUrls: ['./basic-project-information.component.scss',
  '../../project-creation-levels.component.scss']
})
export class BasicProjectInformationComponent implements OnInit {
  public minYear: number | undefined;
  public minMount: number;
  public minDay: number;
  public projectNameFormControl = new FormControl();
  public projectDeliveryDateFormControl = new FormControl();
  public projectStartDateFormControl = new FormControl();
  public descreptionFormControl = new FormControl();
  public infrastructureCostFormControl = new FormControl();
  public humanResourceCostFormControl = new FormControl();
  public startDate: string;
  public deliveryDate: string;

  public inputCustomStyle: InputCustomStyle;
  public checkbox: boolean;
  public checkboxValue: number;

  public contributors: string = '';
  public parentId: string = '';
  public inputInfo1: OutputInfo;
  public contributorsList : contributors[] = [];
  public companyId: string;
  @Output() basicInputValue = new EventEmitter<aarayStyle>();

  constructor(private commonDataForCreateProjectService: CommonDataForCreateProjectService,
              private router: Router,
              private activeRouting:ActivatedRoute) { }

  ngOnInit(): void {
    this.initInputStyle();
    this.setCompanyId();
    this.checkValueIsSetBefor();
  }

  public setStart(event: string) {
    this.startDate = event;
    let fullDate  = event.substring(0,10);
    let arrayDate = fullDate.split('-');

    this.minYear = undefined;

    setTimeout(() => {
      this.minYear  = Number(arrayDate[0]);
      this.minMount = Number(arrayDate[1]);
      this.minDay   = Number(arrayDate[2]);
    }, 300);
  }

  private checkValueIsSetBefor() {
    let projectInfo = this.commonDataForCreateProjectService.getCreateProject();
    if(projectInfo.projectName) this.projectNameFormControl.setValue(projectInfo.projectName);
    if(projectInfo.projectDeliveryTime) this.projectDeliveryDateFormControl.setValue(projectInfo.projectDeliveryTime);
    if(projectInfo.startTimeOfProject) this.projectStartDateFormControl.setValue(projectInfo.startTimeOfProject);
    if(projectInfo.projectDescription) this.descreptionFormControl.setValue(projectInfo.projectDescription);
    if(projectInfo.infrastructureCost) this.infrastructureCostFormControl.setValue(projectInfo.infrastructureCost);
    if(projectInfo.humanResourceCost) this.humanResourceCostFormControl.setValue(projectInfo.humanResourceCost);
    if(projectInfo.parentProjectId) {
      this.checkbox = true;
      this.checkboxValue = 1;
    } else {
      this.checkbox = false;
      this.checkboxValue = 0;
    }
  }

  private setCompanyId() {
    let com = localStorage.getItem(url.CompanyInfo);
    if(com) {
      let c = new CompanySelectedDTO();
      c = JSON.parse(com);
      this.companyId = c.companyId;
    } else {
      let idC = this.activeRouting.snapshot.queryParamMap.get('companyId');
      if(idC) this.companyId = idC;
    }
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
      this.infrastructureCostFormControl.valid && this.humanResourceCostFormControl.valid && this.checkbox != null &&
      this.infrastructureCostFormControl.value > 0 && this.humanResourceCostFormControl.value > 0){
        return true;
      }
      else {
        return false;
      }
  }

  public checked(value: boolean){
    this.checkbox = value;
    this.checkboxValue = value ? 1 : 0;
  }

  public setContributors($event: string){
    this.contributors = $event;
  }

  public inputInfo: aarayStyle;

  public goToNext(){
    this.commonDataForCreateProjectService.setBasicInformationProject(
      this.checkbox ? this.parentId : '',
      this.projectNameFormControl.value,
      this.descreptionFormControl.value,
      this.deliveryDate,
      this.infrastructureCostFormControl.value,
      this.humanResourceCostFormControl.value,
      [],
      this.startDate
    );

    this.commonDataForCreateProjectService.selectStep.emit(3);

    setTimeout(() => {
      document.getElementById('stackHolderInformation')?.click();
    }, 200);
  }

  public setParentId(event: any){
    this.parentId = event;
  }

}

export class aarayStyle {
  constructor(public info : OutputInfo,public infrastructureCost: number,public humanResourceCost: number){
    this.info = info;
    this.infrastructureCost = infrastructureCost;
    this.humanResourceCost = humanResourceCost;
  }
}


export class contributors {
  constructor(name: string,family: string) {
    this.name = name;
    this.family = family;
  }
  name: string;
  family: string;
}
