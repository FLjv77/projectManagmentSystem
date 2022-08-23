import { ReportConnectionToApiService } from './../../../../../../../../managementReport/service/reportConnectionToApi/report-connection-to-api.service';
import { FormControl } from '@angular/forms';
import { InputCustomStyle } from './../../../../../../../../shared/page/component/input-style/input-style.component';
import { Component, OnInit } from '@angular/core';
import { AllocationVerificationDTO, RequestAllocationVerificationDTO } from 'src/app/managementReport/model/modelDtoAllocationReport';
import { ApiResult } from '../../../../../../../../auth/model/authDTO';
import { HttpErrorResponse } from '@angular/common/http';
import { HandleDisplayErrorService } from '../../../../../../../../shared/service/handleError/handle-display-error.service';

@Component({
  selector: 'app-record-financial-report-modal',
  templateUrl: './record-financial-report-modal.component.html',
  styleUrls: ['./record-financial-report-modal.component.scss']
})
export class RecordFinancialReportModalComponent implements OnInit {

  private reportId: string;
  public inputCustomStyle: InputCustomStyle;
  public recordDateFormControl = new FormControl();
  public reporterNameFormControl = new FormControl();
  public approvedAllocationFormControl = new FormControl();
  public descreptionFormControl = new FormControl();
  public showSpinner: boolean = false;

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

  public submmitReport() {
    this.changeSpinnerState(true);
    this.reportConnectionToApiService.allocationReportVerification(
      new RequestAllocationVerificationDTO(
        this.reportId, new AllocationVerificationDTO(
          0, this.descreptionFormControl.value
        )
      )
    ).subscribe((res: ApiResult<boolean>) => {
      this.changeSpinnerState(false);
      if(res.isSuccess && res.statusCode == 200) {

      } else {
        this.handleError.showError(res.statusCode);
      }
    }, (err: HttpErrorResponse) => {
      this.changeSpinnerState(false);
      this.handleError.showError(err.error.StatusCode)
    });
  }

  public closeModal() {
    const modal = document.getElementById('record-financial-report');
    modal?.classList.add('out');
  }

  public changeSpinnerState(state: boolean) {
    this.showSpinner = state;
  }

  public checkActivation(): boolean {
    return !(this.recordDateFormControl.value) ||
    !(this.reporterNameFormControl.value) ||
    !(this.approvedAllocationFormControl.value) ||
    !(this.descreptionFormControl.value) || this.showSpinner;
  }
}
