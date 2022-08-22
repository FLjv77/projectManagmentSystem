import { FormControl } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {InputCustomStyle} from "../../../../../shared/page/component/input-style/input-style.component";
import {Router} from "@angular/router";

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
  public inputCustomStyle: InputCustomStyle;
  public checkbox: boolean;
  public contributors: string = '';
  @Output() basicInputValue = new EventEmitter<Array<string>>();

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
      this.initialCapitalProjectFormControl.value && this.projectProfitFormControl.value && this.contributors != null &&
      this.projectNameFormControl.valid && this.projectDeliveryDateFormControl.valid && this.descreptionFormControl.valid &&
      this.initialCapitalProjectFormControl.valid && this.projectProfitFormControl.valid && this.checkbox != null ){
        return true;
      }
      else{return false}
  }

  public checked(value:boolean){
    this.checkbox = value;
  }

  public goToNext(){
    this.basicInputValue.emit([this.projectNameFormControl.value,this.projectDeliveryDateFormControl.value,
      this.descreptionFormControl.value,this.initialCapitalProjectFormControl.value,
      this.projectProfitFormControl.value , this.contributors]);
  }
  public setContributors($event: string){
    this.contributors = $event;
  }
}
