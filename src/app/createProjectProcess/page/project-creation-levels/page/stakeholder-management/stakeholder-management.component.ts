import { ApiResult } from 'src/app/auth/model/authDTO';
import { CreaterojectService } from 'src/app/createProjectProcess/service/projectCreationLevels/createroject.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../../shared/page/component/input-style/input-style.component";
import { ActivatedRoute } from '@angular/router';

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
  public employerList: Array<userList> = [];
  public supervisorList: Array<userList> = [];
  public executorList: Array<userList> = [];
  public contractorsList: Array<userList> = [];
  public consultantList: Array<userList> = [];
  public investorList: Array<userList> = [];
  public contributorsList: Array<userList> = [];
  private projectId: string | null;

  constructor(private createrojectService:CreaterojectService,
              private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.initInputStyle();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public add(list: Array<userList>, userName:string, family:string){
    if (!this.employerList && userName != null && family != null) this.employerList = new Array<userList>();
    let employers = new userList;
    employers.userName = userName;
    employers.familyName = family;
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
    this.contributorsFamilyFormControl.reset();
    this.contributorsNameFormControl.reset();
  }

  public remove(list : Array<userList>, index: number){
    list.splice(index, 1);
  }

  private getQuery(){
    this.projectId = this.activeRoute.snapshot.queryParamMap.get("projectId");
  }

  public sendContributorsList(){
    this.createrojectService.ModifyProjectParticipant(this.projectId ,this.contributorsList).subscribe((res:ApiResult<userListRequest[]>)=>{console.log(res.data);
    })
  }

}

export class ResourceInformation {
  constructor(resourceName: string,
    resourceApiAddress: string) {
      this.resourceName = resourceName;
      this.resourceApiAddress = resourceApiAddress;
  }
  resourceName: string;
  resourceApiAddress: string;
}

export class userListRequest{
  constructor(userName : string,familyName : string) {
    this.userName = userName;
    this.familyName = familyName;
  }
  userName : string;
  familyName : string;
}

export class userList{
  userName : string;
  familyName : string;
}
