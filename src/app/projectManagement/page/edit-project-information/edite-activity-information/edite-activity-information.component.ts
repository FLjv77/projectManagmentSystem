import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";
import {HandleModalService} from "../../../../shared/service/handleModalService/handle-modal.service";

@Component({
  selector: 'app-edite-activity-information',
  templateUrl: './edite-activity-information.component.html',
  styleUrls: ['./edite-activity-information.component.scss',
    '../../../../createProjectProcess/page/project-creation-levels/project-creation-levels.component.scss']
})
export class EditeActivityInformationComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public activityNameFormControl = new FormControl();
  public startDateFormControl = new FormControl();
  public endDateFormControl = new FormControl();
  public activityPriceFormControl = new FormControl();
  public timeWeightActivityFormControl = new FormControl();
  public priceWeightActivityFormControl = new FormControl();
  public descreptionActivityFormControl = new FormControl();
  public checkbox:boolean = false;

  constructor(private handleModalService: HandleModalService) { }

  ngOnInit(): void {
    this.initInputStyle();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public getValue(){
    if(this.activityNameFormControl.value && this.startDateFormControl.value && this.endDateFormControl.value &&
      this.activityPriceFormControl.value && this.timeWeightActivityFormControl.value && this.priceWeightActivityFormControl.value &&
      this.descreptionActivityFormControl.value &&
      this.activityNameFormControl.valid && this.startDateFormControl.valid && this.endDateFormControl.valid &&
      this.activityPriceFormControl.valid && this.timeWeightActivityFormControl.valid && this.priceWeightActivityFormControl.valid &&
      this.descreptionActivityFormControl.valid){
      return true;
    }
    else{return false}
  }

  public checked(){
    this.checkbox = !this.checkbox;
  }
}
