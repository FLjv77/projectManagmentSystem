import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";
import {userList} from "../../../../createProjectProcess/page/project-creation-levels/page/stakeholder-management/stakeholder-management.component";

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