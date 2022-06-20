import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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
  public addressFormControl = new FormControl();
  public LocationFormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}
