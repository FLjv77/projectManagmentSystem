import { UntypedFormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../../shared/page/component/input-style/input-style.component";

@Component({
  selector: 'app-stakeholder-management',
  templateUrl: './stakeholder-management.component.html',
  styleUrls: ['./stakeholder-management.component.scss','../../project-creation-levels.component.scss']
})
export class StakeholderManagementComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public employerNameFormControl = new UntypedFormControl();
  public employerFirstAndLastNameFormControl = new UntypedFormControl();
  public supervisorNameFormControl = new UntypedFormControl();
  public supervisorFirstAndLastNameFormControl = new UntypedFormControl();
  public executorNameFormControl = new UntypedFormControl();
  public executorFirstAndLastNameFormControl = new UntypedFormControl();
  public contractorsNameFormControl = new UntypedFormControl();
  public ContractorsFirstAndLastNameFormControl = new UntypedFormControl();
  public consultantNameFormControl = new UntypedFormControl();
  public consultantFirstAndLastNameFormControl = new UntypedFormControl();
  public investorNameFormControl = new UntypedFormControl();
  public investorFirstAndLastNameFormControl = new UntypedFormControl();
  public employerList: Array<userList> = [];
  public supervisorList: Array<userList> = [];
  public executorList: Array<userList> = [];
  public contractorsList: Array<userList> = [];
  public consultantList: Array<userList> = [];
  public investorList: Array<userList> = [];

  constructor() { }

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
  }

  public remove(list : Array<userList>, index: number){
    list.splice(index, 1);
  }

}

export class userList{
  userName : string;
  familyName : string;
}
