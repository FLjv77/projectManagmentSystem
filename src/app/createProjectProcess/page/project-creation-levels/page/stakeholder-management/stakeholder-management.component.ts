import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stakeholder-management',
  templateUrl: './stakeholder-management.component.html',
  styleUrls: ['./stakeholder-management.component.scss','../../project-creation-levels.component.scss']
})
export class StakeholderManagementComponent implements OnInit {

  public userNameFormControl = new FormControl();
  public firstAndLastNameFormControl = new FormControl();
  public supervisorNameFormControl = new FormControl();
  public supervisorFirstAndLastNameFormControl = new FormControl();
  public executorNameFormControl = new FormControl();
  public executorFirstAndLastNameFormControl = new FormControl();
  public contractorsNameFormControl = new FormControl();
  public ContractorsFirstAndLastNameFormControl = new FormControl();
  public consultantNameFormControl = new FormControl();
  public consultantFirstAndLastNameFormControl = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }

}
