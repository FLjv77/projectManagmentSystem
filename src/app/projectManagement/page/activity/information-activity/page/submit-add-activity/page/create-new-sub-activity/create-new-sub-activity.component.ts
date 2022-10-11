import { InputCustomStyle } from './../../../../../../../../shared/page/component/input-style/input-style.component';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-new-sub-activity',
  templateUrl: './create-new-sub-activity.component.html',
  styleUrls: ['./create-new-sub-activity.component.scss','../create-new-activity/create-new-activity.component.scss']
})
export class CreateNewSubActivityComponent implements OnInit {
  public projectId: string;
  public inputCustomStyle: InputCustomStyle;
  public activityNameFormControl = new FormControl();
  public startDateFormControl = new FormControl();
  public endDateFormControl = new FormControl();
  public activityPriceFormControl = new FormControl();
  public timeWeightActivityFormControl = new FormControl();
  public priceWeightActivityFormControl = new FormControl();
  public descreptionActivityFormControl = new FormControl();

  constructor(
    private activeRouting: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initInputStyle();
    this.setProjectId();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  private setProjectId() {
    let id = this.activeRouting.snapshot.queryParamMap.get('projectId');
    if(id) this.projectId = id;
  }

  public getValue() {
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
