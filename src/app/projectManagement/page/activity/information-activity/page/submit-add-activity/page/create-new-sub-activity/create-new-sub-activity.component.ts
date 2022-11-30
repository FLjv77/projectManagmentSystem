import { InputCustomStyle } from './../../../../../../../../shared/page/component/input-style/input-style.component';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateActivityDTO } from 'src/app/projectManagement/model/activity/activityDto';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { ActivityConnectToApiService } from 'src/app/projectManagement/service/activity/activityConnectToApi/activity-connect-to-api.service';
import { HandleDisplayErrorService } from 'src/app/shared/service/handleError/handle-display-error.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-new-sub-activity',
  templateUrl: './create-new-sub-activity.component.html',
  styleUrls: ['./create-new-sub-activity.component.scss','../create-new-activity/create-new-activity.component.scss']
})
export class CreateNewSubActivityComponent implements OnInit {
  public minYear: number | undefined;
  public minMount: number;
  public minDay: number;
  public projectId: string;
  private createActivityModel: CreateActivityDTO;
  public inputCustomStyle: InputCustomStyle;
  public activityNameFormControl = new FormControl();
  public startDateFormControl    = new FormControl();
  public endDateFormControl      = new FormControl();
  public startDate: string;
  public endDate: string;
  public activityPriceFormControl = new FormControl();
  public timeWeightActivityFormControl  = new FormControl();
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
      this.descreptionActivityFormControl.value &&
      this.activityPriceFormControl.value > 0 && this.timeWeightActivityFormControl.value > 0 && this.priceWeightActivityFormControl.value > 0 &&
      this.activityNameFormControl.valid && this.startDateFormControl.valid && this.endDateFormControl.valid &&
      this.activityPriceFormControl.valid && this.timeWeightActivityFormControl.valid && this.priceWeightActivityFormControl.valid &&
      this.descreptionActivityFormControl.valid){
        return true;
      }
      else{return false}
  }

  public setParentActivityId(id: string) {
    this.createActivityModel = new CreateActivityDTO(
      '','','',0,0,0,''
    );
    this.createActivityModel.parentActivityId = id;
  }

  public createActivity() {
    this.setProjectId();

    this.createActivityModel.approximateCost = this.activityPriceFormControl.value;
    this.createActivityModel.costWeight = this.priceWeightActivityFormControl.value;
    this.createActivityModel.description = this.descreptionActivityFormControl.value;
    this.createActivityModel.endOfActivity = this.endDate;
    this.createActivityModel.name = this.activityNameFormControl.value;
    this.createActivityModel.startOfActivity = this.startDate;
    this.createActivityModel.timeWeight = this.timeWeightActivityFormControl.value;

    this.activityConnectToApiService.createActivities(
      this.createActivityModel, this.projectId
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
