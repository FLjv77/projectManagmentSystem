import { FormControl } from '@angular/forms';
import { InputCustomStyle } from './../../../../../../../shared/page/component/input-style/input-style.component';
import { HandleModalService } from './../../../../../../../shared/service/handleModalService/handle-modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-activity',
  templateUrl: './sub-activity.component.html',
  styleUrls: ['./sub-activity.component.scss','../../add-activity.component.scss','../../../../project-creation-levels.component.scss']
})
export class SubActivityComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public activityNameFormControl = new FormControl();
  public startDateFormControl = new FormControl();
  public endDateFormControl = new FormControl();
  public activityPriceFormControl = new FormControl();
  public timeWeightActivityFormControl = new FormControl();
  public priceWeightActivityFormControl = new FormControl();
  public descreptionActivityFormControl = new FormControl();
  public checkbox:boolean = false;
  public subactivityList: Array<string> = [];

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

  public openMdalViewActivity(){
    this.handleModalService.openModal('view-activity-diagram-modal');
  }

  addActivity(){
    this.subactivityList.push('222');
  }
}