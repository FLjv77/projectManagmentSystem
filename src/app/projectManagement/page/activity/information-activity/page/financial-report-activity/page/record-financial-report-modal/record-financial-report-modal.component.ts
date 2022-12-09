import { ReportConnectionToApiService } from './../../../../../../../../managementReport/service/reportConnectionToApi/report-connection-to-api.service';
import { FormControl } from '@angular/forms';
import { InputCustomStyle } from './../../../../../../../../shared/page/component/input-style/input-style.component';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AllocationVerificationDTO, RequestAllocationVerificationDTO } from 'src/app/managementReport/model/modelDtoAllocationReport';
import { ApiResult } from '../../../../../../../../auth/model/authDTO';
import { HttpErrorResponse } from '@angular/common/http';
import { HandleDisplayErrorService } from '../../../../../../../../shared/service/handleError/handle-display-error.service';
import { AlertDialogBySweetAlertService } from 'src/app/shared/service/alertDialog/alert-dialog-by-sweet-alert.service';

@Component({
  selector: 'app-record-financial-report-modal',
  templateUrl: './record-financial-report-modal.component.html',
  styleUrls: ['./record-financial-report-modal.component.scss']
})
export class RecordFinancialReportModalComponent implements OnInit {

  @Input() reportId: string;
  @Output() removedReport = new EventEmitter<boolean>();
  public inputCustomStyle: InputCustomStyle;
  public recordDateFormControl = new FormControl();
  public reporterNameFormControl = new FormControl();
  public approvedAllocationFormControl = new FormControl();
  public descreptionFormControl = new FormControl();
  public showSpinner: boolean = false;
  public stateRecord: number = 0;

  constructor(private reportConnectionToApiService: ReportConnectionToApiService,
    private alertDialogBySweetAlertService: AlertDialogBySweetAlertService,
    private handleError: HandleDisplayErrorService) { }

  ngOnInit(): void {
    this.initInputStyle();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public setState(state: number) {
    this.stateRecord = state;
  }

  public submmitReport() {
    this.changeSpinnerState(true);
    this.reportConnectionToApiService.allocationReportVerification(
      new RequestAllocationVerificationDTO(
        this.reportId, new AllocationVerificationDTO(
          this.stateRecord, this.descreptionFormControl.value
        )
      )
    ).subscribe((res: ApiResult<boolean>) => {
      this.changeSpinnerState(false);
      if(res.isSuccess && res.statusCode == 200) {
        this.closeModal();
        this.removedReport.emit(true);
        this.alertDialogBySweetAlertService.showSuccessAlert('با موفقیت ثبت شد');
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
    return !(this.descreptionFormControl.value) || this.showSpinner;
  }
}
