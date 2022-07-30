import { FormControl } from '@angular/forms';
import { InputCustomStyle } from './../../../../../../../../shared/page/component/input-style/input-style.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-new-activity',
  templateUrl: './create-new-activity.component.html',
  styleUrls: ['./create-new-activity.component.scss']
})
export class CreateNewActivityComponent implements OnInit {

  public inputCustomStyle: InputCustomStyle;
  public activityNameFormControl = new FormControl();
  public startDateFormControl = new FormControl();
  public endDateFormControl = new FormControl();
  public activityPriceFormControl = new FormControl();
  public timeWeightActivityFormControl = new FormControl();
  public priceWeightActivityFormControl = new FormControl();
  public descreptionActivityFormControl = new FormControl();

  constructor() { }

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

}
