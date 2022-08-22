import { AllocationReportDTO, ShareLevelOfActivityDTO } from './../../../../model/modelDtoAllocationReport';
import { InputCustomStyle } from './../../../../../shared/page/component/input-style/input-style.component';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ReportConnectionToApiService } from '../../../../service/reportConnectionToApi/report-connection-to-api.service';
import { RequestAllocationReportDTO } from 'src/app/managementReport/model/modelDtoAllocationReport';
import { ApiResult } from '../../../../../auth/model/authDTO';
import { HttpErrorResponse } from '@angular/common/http';
import { HandleDisplayErrorService } from '../../../../../shared/service/handleError/handle-display-error.service';

@Component({
  selector: 'app-financial-report',
  templateUrl: './financial-report.component.html',
  styleUrls: ['./financial-report.component.scss',
  '../progress-report/progress-report.component.scss',
  '../../../../../projectManagement/page/activity/information-activity/page/activity-relationships/activity-relationships.component.scss'
]
})
export class FinancialReportComponent implements OnInit {

  private projectId: string;
  public showProgress: boolean = false;
  public inputCustomStyle: InputCustomStyle;
  public ProgressFormControl = new FormControl();
  public paymentDateFormControl = new FormControl();
  public reportedCostFormControl = new FormControl();
  public reporterNameFormControl = new FormControl();
  public descreptionReportFormControl = new FormControl();
  public financialDocumentsFormControl = new FormControl();
  private activityIds: ShareLevelOfActivityDTO[];

  constructor(private reportConnectionToApiService: ReportConnectionToApiService,
    private handleError: HandleDisplayErrorService) { }

  ngOnInit(): void {
    this.initInputStyle();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public submitAllocationReport() {
    this.setSpinnerState(true);
    let allocation = new  AllocationReportDTO(
      this.reporterNameFormControl.value,
      this.descreptionReportFormControl.value,
      this.reportedCostFormControl.value,
      this.paymentDateFormControl.value,
      this.activityIds
    );
    this.reportConnectionToApiService.registerAllocationReport(
      new RequestAllocationReportDTO(
        this.projectId, allocation
      )
    ).subscribe((res: ApiResult<string>) => {
      this.setSpinnerState(false);
      if(res.statusCode == 200 && res.isSuccess) {

      } else {
        this.handleError.showError(res.statusCode);
      }
    }, (err: HttpErrorResponse) => {
      this.setSpinnerState(false);
      this.handleError.showError(err.error.StatusCode);
    });
  }

  private setSpinnerState(state: boolean) {
    this.showProgress = state;
  }

  public getValue(): boolean{
    if(this.reporterNameFormControl.value && this.reportedCostFormControl.value &&
      this.descreptionReportFormControl.value && this.paymentDateFormControl.value && !this.showProgress){
        return true;
      }
      else{return false}
  }

  public addActivityToActivityAds() {

  }
}
