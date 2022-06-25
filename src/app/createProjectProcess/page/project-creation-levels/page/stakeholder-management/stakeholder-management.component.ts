import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../../shared/page/component/input-style/input-style.component";

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
  public employerList: Array<userList> = [];
  public supervisorList: Array<userList> = [];
  public executorList: Array<userList> = [];
  public contractorsList: Array<userList> = [];
  public consultantList: Array<userList> = [];

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
  }

  public remove(list : Array<userList>, index: number){
    list.splice(index, 1);
  }

}

export class userList{
  userName : string;
  familyName : string;
}
