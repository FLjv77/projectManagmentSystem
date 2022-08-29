import { AlertDialogBySweetAlertService } from './../../../../../shared/service/alertDialog/alert-dialog-by-sweet-alert.service';
import { CreaterojectService } from './../../../../service/projectCreationLevels/createroject.service';
import { HandleModalService } from './../../../../../shared/service/handleModalService/handle-modal.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../../shared/page/component/input-style/input-style.component";
import { CreateActivityDTO, CreateParentActivityDTO } from '../../../../model/createProjectModel/createProject';
import { ApiResult } from '../../../../../auth/model/authDTO';
import { HandleDisplayErrorService } from '../../../../../shared/service/handleError/handle-display-error.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss','../../project-creation-levels.component.scss']
})
export class AddActivityComponent implements OnInit {

  /// activity = a4670668-dc22-ed11-bec9-b1f673a1bda0
  /// company = 09e8ff21-ad1f-ed11-bec9-b1f673a1bda0
  public inputCustomStyle: InputCustomStyle;
  private projectId: string = '9695b76e-ae1f-ed11-bec9-b1f673a1bda0';
  public activityNameFormControl = new FormControl();
  public startDateFormControl = new FormControl();
  public endDateFormControl = new FormControl();
  public activityPriceFormControl = new FormControl();
  public timeWeightActivityFormControl = new FormControl();
  public priceWeightActivityFormControl = new FormControl();
  public descreptionActivityFormControl = new FormControl();
  public activityList: Array<string> = ['2223'];
  public showSpinner: boolean = false;

  constructor(private handleModalService: HandleModalService,
              private handleError: HandleDisplayErrorService,
              private alertDialogBySweetAlertService: AlertDialogBySweetAlertService,
              private createrojectService: CreaterojectService) { }

  ngOnInit(): void {
    this.initInputStyle();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public createActivity() {
    this.changeSpinnerState(true);
    this.createrojectService.CreateParentActivity(
      this.projectId, new CreateParentActivityDTO(
        this.activityNameFormControl.value,
        this.startDateFormControl.value,
        this.endDateFormControl.value,
        20,
        this.priceWeightActivityFormControl.value,
        this.timeWeightActivityFormControl.value,
         this.descreptionActivityFormControl.value
      )
    ).subscribe((res: ApiResult<string>) => {
      this.changeSpinnerState(false);
      if(res.statusCode == 200 && res.isSuccess) {
        this.alertDialogBySweetAlertService.showSuccessAlert('فعالیت با موفقیت ساخته شد');
      } else {
        this.handleError.showError(res.statusCode);
      }
    }, (err: HttpErrorResponse) => {
      this.changeSpinnerState(false);
      this.handleError.showError(err.status);
    });
  }

  public getValue(){
    if(this.activityNameFormControl.value && this.startDateFormControl.value && this.endDateFormControl.value &&
      this.activityPriceFormControl.value && this.timeWeightActivityFormControl.value && this.priceWeightActivityFormControl.value &&
      this.descreptionActivityFormControl.value &&
      this.activityNameFormControl.valid && this.startDateFormControl.valid && this.endDateFormControl.valid &&
      this.activityPriceFormControl.valid && this.timeWeightActivityFormControl.valid && this.priceWeightActivityFormControl.valid &&
      this.descreptionActivityFormControl.valid && !this.showSpinner) {
        return true;
      }
      else{return false}
  }

  public openMdalViewActivity(){
    this.handleModalService.openModal('view-activity-diagram-modal');
  }

  public addActivity(){
    this.activityList.push('222');
  }

  public changeSpinnerState(state: boolean) {
    this.showSpinner = state;
  }
}
