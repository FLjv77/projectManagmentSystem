import { Participant } from './../../../../model/createProjectModel/createProject';
import { CommonDataForCreateProjectService } from 'src/app/createProjectProcess/service/commonData/commonDataForCreateProject/common-data-for-create-project.service';
import { CreaterojectService } from 'src/app/createProjectProcess/service/projectCreationLevels/createroject.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../../shared/page/component/input-style/input-style.component";
import { ActivatedRoute } from '@angular/router';
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
    this.setParticipate();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public add(list: Array<Participant>, userName:string, family:string, num: number) {
    if (!this.employerList && userName != null && family != null) this.employerList = new Array<Participant>();
    if (num==1) {
      this.tagName = 'کارفرما';
      this.employerNameFormControl.reset();
      this.employerFirstAndLastNameFormControl.reset();
    }
    else if (num==2) {
      this.tagName = 'ناظر';
      this.supervisorNameFormControl.reset();
      this.supervisorFirstAndLastNameFormControl.reset();
    }
    else if (num==3) {
      this.tagName = 'مجری';
      this.executorNameFormControl.reset();
      this.executorFirstAndLastNameFormControl.reset();
    }
    else if (num==4) {
      this.tagName = 'پیمان کار';
      this.contractorsNameFormControl.reset();
      this.ContractorsFirstAndLastNameFormControl.reset();
    }
    else if (num==5) {
      this.tagName = 'مشاور';
      this.consultantNameFormControl.reset();
      this.consultantFirstAndLastNameFormControl.reset();
    }
    else if (num==6) {
      this.tagName = 'سرمایه گذار';
      this.investorNameFormControl.reset();
      this.investorFirstAndLastNameFormControl.reset();
    }
    else if (num==7) {
      this.tagName = 'مشارکت کنندگان';
      this.contributorsFamilyFormControl.reset();
      this.contributorsNameFormControl.reset();
    }
    let employers = new Participant(userName,family,this.tagName);

    list.push(employers);
    this.list.push(employers);



  }

  private setParticipate() {
      if(this.commonDataForCreateProjectService.name1.length > 0) {
        for(let i=0; i<this.commonDataForCreateProjectService.name1.length; i++) {
          this.employerList.push(this.commonDataForCreateProjectService.name1[i]);
        }
      } if(this.commonDataForCreateProjectService.name2.length > 0) {
        for(let i=0; i<this.commonDataForCreateProjectService.name2.length; i++) {
          this.supervisorList.push(this.commonDataForCreateProjectService.name2[i]);
        }
      } if(this.commonDataForCreateProjectService.name3.length > 0) {
        for(let i=0; i<this.commonDataForCreateProjectService.name3.length; i++) {
          this.executorList.push(this.commonDataForCreateProjectService.name3[i]);
        }
      } if(this.commonDataForCreateProjectService.name4.length > 0) {
        for(let i=0; i<this.commonDataForCreateProjectService.name4.length; i++) {
          this.contractorsList.push(this.commonDataForCreateProjectService.name4[i]);
        }
      } if(this.commonDataForCreateProjectService.name5.length > 0) {
        for(let i=0; i<this.commonDataForCreateProjectService.name5.length; i++) {
          this.consultantList.push(this.commonDataForCreateProjectService.name5[i]);
        }
      } if(this.commonDataForCreateProjectService.name6.length > 0) {
        for(let i=0; i<this.commonDataForCreateProjectService.name6.length; i++) {
          this.investorList.push(this.commonDataForCreateProjectService.name6[i]);
        }
      } if(this.commonDataForCreateProjectService.name7.length > 0) {
        for(let i=0; i<this.commonDataForCreateProjectService.name7.length; i++) {
          this.contributorsList.push(this.commonDataForCreateProjectService.name7[i]);
        }
      }

  }

  public remove(list : Array<Participant>, index: number){
    list.splice(index, 1);
  }

  private getQuery(){
    this.projectId = this.activeRoute.snapshot.queryParamMap.get("projectId");
  }

  /*
    public employerList: Array<Participant> = [];
  public supervisorList: Array<Participant> = [];
  public executorList: Array<Participant> = [];
  public contractorsList: Array<Participant> = [];
  public consultantList: Array<Participant> = [];
  public investorList: Array<Participant> = [];
  public contributorsList: Array<Participant> = [];
      this.commonDataForCreateProjectService.name2 = new Participant(this.supervisorNameFormControl.value, this.supervisorFirstAndLastNameFormControl.value, '');
    this.commonDataForCreateProjectService.name3 = new Participant(this.executorNameFormControl.value, this.executorFirstAndLastNameFormControl.value, '');
    this.commonDataForCreateProjectService.name4 = new Participant(this.contractorsNameFormControl.value, this.ContractorsFirstAndLastNameFormControl.value, '');
    this.commonDataForCreateProjectService.name5 = new Participant(this.consultantNameFormControl.value, this.consultantFirstAndLastNameFormControl.value, '');
    this.commonDataForCreateProjectService.name6 = new Participant(this.investorNameFormControl.value, this.investorFirstAndLastNameFormControl.value, '');
    this.commonDataForCreateProjectService.name7 = new Participant(this.contributorsNameFormControl.value, this.contributorsFamilyFormControl.value, '');
  */
  public sendContributorsList() {
    let list = new Array<Participant>();

    if(this.employerList.length == 0 && this.employerNameFormControl.value) {
      this.commonDataForCreateProjectService.name1 = [new Participant(this.employerNameFormControl.value, this.employerFirstAndLastNameFormControl.value, 'کارفرما')];
      this.employerList = [new Participant(this.employerNameFormControl.value, this.employerFirstAndLastNameFormControl.value, 'کارفرما')];
    } else {
      this.commonDataForCreateProjectService.name1 = this.employerList;
      if(this.employerNameFormControl.value) {
        this.commonDataForCreateProjectService.name1.push(new Participant(this.employerNameFormControl.value, this.employerFirstAndLastNameFormControl.value, 'کارفرما'));
      }
    }


    if(this.supervisorList.length == 0 && this.supervisorNameFormControl.value) {
      this.commonDataForCreateProjectService.name2 = [new Participant(this.supervisorNameFormControl.value, this.supervisorFirstAndLastNameFormControl.value, 'ناظر')];
      this.supervisorList = [new Participant(this.supervisorNameFormControl.value, this.supervisorFirstAndLastNameFormControl.value, 'ناظر')];
    } else {
      this.commonDataForCreateProjectService.name2 = this.supervisorList;
      if(this.supervisorNameFormControl.value) {
        this.commonDataForCreateProjectService.name2.push(new Participant(this.supervisorNameFormControl.value, this.supervisorFirstAndLastNameFormControl.value, 'ناظر'));
      }
    }


    if(this.executorList.length == 0 && this.executorNameFormControl.value) {
      this.commonDataForCreateProjectService.name3 = [new Participant(this.executorNameFormControl.value, this.executorFirstAndLastNameFormControl.value, 'مجری')];
      this.executorList = [new Participant(this.executorNameFormControl.value, this.executorFirstAndLastNameFormControl.value, 'مجری')];

    } else {
      this.commonDataForCreateProjectService.name3 = this.executorList;
      if(this.executorNameFormControl.value) {
        this.commonDataForCreateProjectService.name3.push(new Participant(this.executorNameFormControl.value, this.executorFirstAndLastNameFormControl.value, 'مجری'));
      }
    }


    if(this.contractorsList.length == 0 && this.contractorsNameFormControl.value) {
      this.commonDataForCreateProjectService.name4 = [new Participant(this.contractorsNameFormControl.value, this.ContractorsFirstAndLastNameFormControl.value, 'پیمان کار')];
      this.contractorsList = [new Participant(this.contractorsNameFormControl.value, this.ContractorsFirstAndLastNameFormControl.value, 'پیمان کار')];

    } else {
      this.commonDataForCreateProjectService.name4 = this.contractorsList;
      if(this.contractorsNameFormControl.value) {
        this.commonDataForCreateProjectService.name4.push(new Participant(this.contractorsNameFormControl.value, this.ContractorsFirstAndLastNameFormControl.value, 'پیمان کار'));
      }
    }


    if(this.consultantList.length == 0 && this.consultantNameFormControl.value) {
      this.commonDataForCreateProjectService.name5 = [new Participant(this.consultantNameFormControl.value, this.consultantFirstAndLastNameFormControl.value, 'مشاور')];
      this.consultantList = [new Participant(this.consultantNameFormControl.value, this.consultantFirstAndLastNameFormControl.value, 'مشاور')];

    } else {
      this.commonDataForCreateProjectService.name5 = this.consultantList;
      if(this.consultantNameFormControl.value) {
        this.commonDataForCreateProjectService.name5.push(new Participant(this.consultantNameFormControl.value, this.consultantFirstAndLastNameFormControl.value,'مشاور'));
      }
    }


    if(this.investorList.length == 0 && this.investorNameFormControl.value) {
      this.commonDataForCreateProjectService.name6 = [new Participant(this.investorNameFormControl.value, this.investorFirstAndLastNameFormControl.value, 'سرمایه گذار')];
      this.investorList = [new Participant(this.investorNameFormControl.value, this.investorFirstAndLastNameFormControl.value, 'سرمایه گذار')];
    } else {
      this.commonDataForCreateProjectService.name6 = this.investorList;
      if(this.investorNameFormControl.value) {
        this.commonDataForCreateProjectService.name6.push(new Participant(this.investorNameFormControl.value, this.investorFirstAndLastNameFormControl.value, 'سرمایه گذار'));
      }
    }


    if(this.contributorsList.length == 0 && this.contributorsNameFormControl.value) {
      this.commonDataForCreateProjectService.name7 = [new Participant(this.contributorsNameFormControl.value, this.contributorsFamilyFormControl.value, 'مشارکت کنندگان')];
      this.contributorsList = [new Participant(this.contributorsNameFormControl.value, this.contributorsFamilyFormControl.value, 'مشارکت کنندگان')];

    } else {
      this.commonDataForCreateProjectService.name7 = this.contributorsList;
      if(this.contributorsNameFormControl.value) {
        this.commonDataForCreateProjectService.name7.push(new Participant(this.contributorsNameFormControl.value, this.contributorsFamilyFormControl.value, 'مشارکت کنندگان'));
      }
    }


    for(let i=0; i<this.supervisorList.length; i++) {
      list.push(this.supervisorList[i]);
    }
    for(let i=0; i<this.executorList.length; i++) {
      list.push(this.executorList[i]);
    }
    for(let i=0; i<this.contractorsList.length; i++) {
      list.push(this.contractorsList[i]);
    }
    for(let i=0; i<this.consultantList.length; i++) {
      list.push(this.consultantList[i]);
    }
    for(let i=0; i<this.investorList.length; i++) {
      list.push(this.investorList[i]);
    }
    for(let i=0; i<this.contributorsList.length; i++) {
      list.push(this.contributorsList[i]);
    }
    for(let i=0; i<this.employerList.length; i++) {
      list.push(this.employerList[i]);
    }

    console.log();

    this.commonDataForCreateProjectService.setParticipant(
      list
    );
    this.commonDataForCreateProjectService.selectStep.emit(4);
    setTimeout(() => {
      document.getElementById('locationInformation')?.click();
    }, 200);
    }
    // this.createrojectService.ModifyProjectParticipant(this.projectId ,this.contributorsList).subscribe((res:ApiResult<ParticipantRequest[]>)=>{console.log(res.data);
    // })
}

