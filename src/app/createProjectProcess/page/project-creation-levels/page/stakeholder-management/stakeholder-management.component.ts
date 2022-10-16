import { CommonDataForCreateProjectService } from 'src/app/createProjectProcess/service/commonData/commonDataForCreateProject/common-data-for-create-project.service';
import { CreaterojectService } from 'src/app/createProjectProcess/service/projectCreationLevels/createroject.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../../shared/page/component/input-style/input-style.component";
import { ActivatedRoute } from '@angular/router';
import { Participant } from 'src/app/createProjectProcess/model/createProjectModel/createProject';
import { List } from 'echarts';

@Component({
  selector: 'app-stakeholder-management',
  templateUrl: './stakeholder-management.component.html',
  styleUrls: ['./stakeholder-management.component.scss','../../project-creation-levels.component.scss']
})
export class StakeholderManagementComponent implements OnInit {
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
  public contributorsFamilyFormControl = new FormControl();
  public contributorsNameFormControl = new FormControl();
  public employerList: Array<Participant> = [];
  public supervisorList: Array<Participant> = [];
  public executorList: Array<Participant> = [];
  public contractorsList: Array<Participant> = [];
  public consultantList: Array<Participant> = [];
  public investorList: Array<Participant> = [];
  public contributorsList: Array<Participant> = [];
  private projectId: string | null;
  public list: Array<Participant> = [];
  public tagName: string;

  constructor(private createrojectService:CreaterojectService,
              private activeRoute:ActivatedRoute,
              private commonDataForCreateProjectService:CommonDataForCreateProjectService) { }

  ngOnInit(): void {
    this.initInputStyle();
    this.employerList = new Array<Participant>;
    this.supervisorList = new Array<Participant>;
    this.executorList = new Array<Participant>;
    this.contractorsList = new Array<Participant>;
    this.consultantList = new Array<Participant>;
    this.investorList = new Array<Participant>;
    this.contributorsList = new Array<Participant>;
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public add(list: Array<Participant>, userName:string, family:string, num: number){
    if (!this.employerList && userName != null && family != null) this.employerList = new Array<Participant>();
    if (num==1) {
      this.tagName = 'کارفرما'
    }
    else if (num==2) {
      this.tagName = 'ناظر'
    }
    else if (num==3) {
      this.tagName = 'مجری'
    }
    else if (num==4) {
      this.tagName = 'پیمان کار'
    }
    else if (num==5) {
      this.tagName = 'مشاور'
    }
    else if (num==6) {
      this.tagName = 'سرمایه گذار'
    }
    else if (num==7) {
      this.tagName = 'سرمایه گذار'
    }
    let employers = new Participant(userName,family,this.tagName);

    list.push(employers);
    this.list.push(employers);
    console.log(this.list);
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
    this.contributorsFamilyFormControl.reset();
    this.contributorsNameFormControl.reset();
  }

  public remove(list : Array<Participant>, index: number){
    list.splice(index, 1);
  }

  private getQuery(){
    this.projectId = this.activeRoute.snapshot.queryParamMap.get("projectId");
  }

  public sendContributorsList(){
      this.commonDataForCreateProjectService.setParticipant(this.list);
      this.commonDataForCreateProjectService.selectStep.emit(4);

      setTimeout(() => {
        document.getElementById('locationInformation')?.click();
      }, 200);
    }
    // this.createrojectService.ModifyProjectParticipant(this.projectId ,this.contributorsList).subscribe((res:ApiResult<ParticipantRequest[]>)=>{console.log(res.data);
    // })
}

