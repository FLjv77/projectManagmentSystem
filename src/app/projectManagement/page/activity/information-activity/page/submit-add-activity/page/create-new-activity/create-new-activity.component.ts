import { FormControl } from '@angular/forms';
import { InputCustomStyle } from './../../../../../../../../shared/page/component/input-style/input-style.component';
import { Component, OnInit } from '@angular/core';
import { ActivityConnectToApiService } from 'src/app/projectManagement/service/activity/activityConnectToApi/activity-connect-to-api.service';
import { CreateActivityDTO } from 'src/app/projectManagement/model/activity/activityDto';
import { ActivatedRoute } from '@angular/router';
import { ApiResult } from '../../../../../../../../auth/model/authDTO';
import { HandleDisplayErrorService } from 'src/app/shared/service/handleError/handle-display-error.service';
import { HandelErrorTDO } from '../../../../../../../../shared/service/handleError/handle-display-error.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-new-activity',
  templateUrl: './create-new-activity.component.html',
  styleUrls: ['./create-new-activity.component.scss']
})
export class CreateNewActivityComponent implements OnInit {
  public minYear: number | undefined;
  public minMount: number;
  public minDay: number;
  private projectId: string;
  public inputCustomStyle: InputCustomStyle;
  public activityNameFormControl = new FormControl();
  public startDateFormControl = new FormControl();
  public endDateFormControl = new FormControl();
  public startDate: string;
  public endDate: string;
  public activityPriceFormControl = new FormControl();
  public timeWeightActivityFormControl = new FormControl();
  public priceWeightActivityFormControl = new FormControl();
  public descreptionActivityFormControl = new FormControl();

  constructor(
    private activityConnectToApiService: ActivityConnectToApiService,
    private activeRouting: ActivatedRoute,
    private handleDisplayErrorService: HandleDisplayErrorService,
    private handleError: HandleDisplayErrorService,
    ) { }

  ngOnInit(): void {
    this.initInputStyle();
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

  public getValue(){
    if(this.activityNameFormControl.value && this.startDateFormControl.value && this.endDateFormControl.value &&
      this.activityPriceFormControl.value && this.timeWeightActivityFormControl.value && this.priceWeightActivityFormControl.value &&
      this.activityPriceFormControl.value > 0 && this.timeWeightActivityFormControl.value > 0 && this.priceWeightActivityFormControl.value > 0 &&
      this.descreptionActivityFormControl.value &&
      this.activityNameFormControl.valid && this.startDateFormControl.valid && this.endDateFormControl.valid &&
      this.activityPriceFormControl.valid && this.timeWeightActivityFormControl.valid && this.priceWeightActivityFormControl.valid &&
      this.descreptionActivityFormControl.valid){
        return true;
      }
      else{return false}
  }

  public createActivity() {
    this.setProjectId();
    this.activityConnectToApiService.createActivities(
      new CreateActivityDTO(
        this.activityNameFormControl.value,
        this.startDate,
        this.endDate,
        this.activityPriceFormControl.value,
        this.timeWeightActivityFormControl.value,
        this.priceWeightActivityFormControl.value,
        this.descreptionActivityFormControl.value
      ), this.projectId
    ).subscribe((res: ApiResult<string>) => {
      if(res.isSuccess && res.isSuccess) {
        this.activityNameFormControl.reset();
        this.activityPriceFormControl.reset();
        this.timeWeightActivityFormControl.reset();
        this.descreptionActivityFormControl.reset();
        this.priceWeightActivityFormControl.reset();
        this.startDateFormControl.reset();
        this.endDateFormControl.reset();

        this.handleDisplayErrorService.showSuccessAlert('فعالیت ایجاد شد');
      } else {
        this.handleError.showError(res.statusCode);
      }
    }, (err: HttpErrorResponse) => {
      this.handleError.showError(err.status);
    });
  }

  public setStartTime(event: any) {
    this.startDate = event;

    let fullDate  = event.substring(0,10);
    let arrayDate = fullDate.split('-');

    this.minYear = undefined;

    setTimeout(() => {
      this.minYear  = Number(arrayDate[0]);
      this.minMount = Number(arrayDate[1]);
      this.minDay   = Number(arrayDate[2]);
    }, 300);
  }

  public setEndTime(event: any) {
    this.endDate = event;
  }
}
