import { Participant } from './../../../../createProjectProcess/model/createProjectModel/createProject';
import { ActivatedRoute } from '@angular/router';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { ProjectSelectedDTO } from 'src/app/projectManagement/model/project/projectDto';
import { ProjectConnectToApiService } from 'src/app/projectManagement/service/project/projectConnectToApi/project-connect-to-api.service';
import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-edit-developer-informationormation',
  templateUrl: './edit-developer-informationormation.component.html',
  styleUrls: ['./edit-developer-informationormation.component.scss',  '../../../../createProjectProcess/page/project-creation-levels/project-creation-levels.component.scss']
})
export class EditDeveloperInformationormationComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public employerNameFormControl = new FormControl();
  public employerFirstAndLastNameFormControl = new FormControl();
  public supervisorNameFormControl = new FormControl();
  public supervisorFirstAndLastNameFormControl = new FormControl();
  public executorNameFormControl = new FormControl();
  public executorFirstAndLastNameFormControl = new FormControl();
  public contractorsNameFormControl = new FormControl();
  public ContractorsFirstAndLastNameFormControl = new FormControl();
  public consultantNameFormControl = new FormControl();
  public consultantFirstAndLastNameFormControl = new FormControl();
  public investorNameFormControl = new FormControl();
  public investorFirstAndLastNameFormControl = new FormControl();
  public employerList: Array<Participant> = [];
  public supervisorList: Array<Participant> = [];
  public executorList: Array<Participant> = [];
  public contractorsList: Array<Participant> = [];
  public consultantList: Array<Participant> = [];
  public investorList: Array<Participant> = [];
  public projectId: string | null;

  constructor(private projectConnectToApiService :ProjectConnectToApiService,
              private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.initInputStyle();
    this.getInfo();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public getQuryParam(){
    this.projectId = this.activeRoute.snapshot.queryParamMap.get('projectIdEdit');
  }

  public add(list: Array<Participant>, userName:string, family:string){
    if (!this.employerList && userName != null && family != null) this.employerList = new Array<Participant>();
    let employers = new Participant(userName,family,'');
    list.push(employers);
    this.employerNameFormControl.reset();
    this.employerFirstAndLastNameFormControl.reset();
    this.supervisorNameFormControl.reset();
    this.supervisorFirstAndLastNameFormControl.reset();
    this.executorNameFormControl.reset();
    this.executorFirstAndLastNameFormControl.reset();
    this.contractorsNameFormControl.reset();
    this.ContractorsFirstAndLastNameFormControl.reset();
    this.consultantNameFormControl.reset();
    this.consultantFirstAndLastNameFormControl.reset();
    this.investorNameFormControl.reset();
    this.investorFirstAndLastNameFormControl.reset();
  }

  public getInfo(){
    this.projectConnectToApiService.getProjectGeneralProperties(this.projectId)
    .subscribe((res: ApiResult<ProjectSelectedDTO>)=>{
      //console.log(res.data)
      // this.projectNameFormControl.setValue(res.data.projectName);
      // this.projectDeliveryDateFormControl.setValue(res.data.projectDeliveryTime.timeInterval);
      // this.descreptionFormControl.setValue(res.data.projectDescription);
      // this.objectivesFormControl.setValue(res.data.projectTargets);
      // this.projectChallengeFormControl.setValue(res.data.projectChallange);
      // this.projectTheBottleneckFormControl.setValue(res.data.projectBottleNeck);
      // this.humanResourceCostFormControl.setValue(res.data.humanResourceCost);
      // this.infrastructureCostFormControl.setValue(res.data.infrastructureCost);
    });
  }

  public remove(list : Array<Participant>, index: number){
    list.splice(index, 1);
  }


}
