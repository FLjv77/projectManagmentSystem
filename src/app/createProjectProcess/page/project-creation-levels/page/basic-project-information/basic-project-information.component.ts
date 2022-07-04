import { UntypedFormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../../shared/page/component/input-style/input-style.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-basic-project-information',
  templateUrl: './basic-project-information.component.html',
  styleUrls: ['./basic-project-information.component.scss','../../project-creation-levels.component.scss']
})
export class BasicProjectInformationComponent implements OnInit {

  public projectNameFormControl = new UntypedFormControl();
  public projectDeliveryDateFormControl = new UntypedFormControl();
  public descreptionFormControl = new UntypedFormControl();
  public initialCapitalProjectFormControl = new UntypedFormControl();
  public projectProfitFormControl = new UntypedFormControl();
  public addressFormControl = new UntypedFormControl();
  public LocationFormControl = new UntypedFormControl();
  public inputCustomStyle: InputCustomStyle;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initInputStyle();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public getValue(){
    if(this.projectNameFormControl.value && this.projectDeliveryDateFormControl.value && this.descreptionFormControl.value &&
      this.initialCapitalProjectFormControl.value && this.projectProfitFormControl.value && this.addressFormControl.value &&
      this.LocationFormControl.value &&
      this.projectNameFormControl.valid && this.projectDeliveryDateFormControl.valid && this.descreptionFormControl.valid &&
      this.initialCapitalProjectFormControl.valid && this.projectProfitFormControl.valid && this.addressFormControl.valid &&
      this.LocationFormControl.valid){
        return true;
      }
      else{return false}
  }

  public goOnMap() {
    this.router.navigate(['../../createProject/selectLocationOnMap']);
  }
}
