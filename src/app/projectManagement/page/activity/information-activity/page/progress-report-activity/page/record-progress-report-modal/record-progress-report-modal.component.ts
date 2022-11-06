import { ReportVerificationDTO } from './../../../../../../../../managementReport/model/getReports';
import { FormControl } from '@angular/forms';
import { InputCustomStyle } from './../../../../../../../../shared/page/component/input-style/input-style.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReportConnectionToApiService } from 'src/app/managementReport/service/reportConnectionToApi/report-connection-to-api.service';
import { HandleDisplayErrorService } from 'src/app/shared/service/handleError/handle-display-error.service';
import { PrepareShareLevelOfActivityDTO } from 'src/app/managementReport/model/getReports';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiResult } from 'src/app/auth/model/authDTO';

@Component({
  selector: 'app-record-progress-report-modal',
  templateUrl: './record-progress-report-modal.component.html',
  styleUrls: ['./record-progress-report-modal.component.scss']
})
export class RecordProgressReportModalComponent implements OnInit {


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
    private handleError: HandleDisplayErrorService) { }

  ngOnInit(): void {
    this.initInputStyle();
  }

  public setState(state: number) {
    this.stateRecord = state;
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public submmitReport() {
    this.changeSpinnerState(true);
    this.reportConnectionToApiService.ProgressReportVerification(
      new ReportVerificationDTO(
        this.stateRecord, this.descreptionFormControl.value
      ) ,this.reportId
    ).subscribe((res: ApiResult<boolean>) => {
      this.changeSpinnerState(false);
      if(res.isSuccess && res.statusCode == 200) {
        this.closeModal();
        this.removedReport.emit(true);

      } else {
        this.handleError.showError(res.statusCode);
      }
    }, (err: HttpErrorResponse) => {
      this.changeSpinnerState(false);
      this.handleError.showError(err.error.StatusCode)
    });
  }

  closeModal() {
    const modal = document.getElementById('record-progress-report');
    modal?.classList.add('out');
  }

  public changeSpinnerState(state: boolean) {
    this.showSpinner = state;
  }

  public checkActivation(): boolean {
    return !(this.descreptionFormControl.value) || this.showSpinner;
  }
}
