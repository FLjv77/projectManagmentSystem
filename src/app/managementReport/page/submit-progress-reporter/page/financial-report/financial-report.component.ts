import { ProgressReportDTO } from './../../../../model/modelDtoAllocationReport';
import { InputCustomStyle } from './../../../../../shared/page/component/input-style/input-style.component';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ReportConnectionToApiService } from '../../../../service/reportConnectionToApi/report-connection-to-api.service';
import { RequestAllocationReportDTO } from 'src/app/managementReport/model/modelDtoAllocationReport';
import { ApiResult } from '../../../../../auth/model/authDTO';
import { HttpErrorResponse } from '@angular/common/http';
import { HandleDisplayErrorService } from '../../../../../shared/service/handleError/handle-display-error.service';
import { ActivatedRoute } from '@angular/router';
import { PrepareShareLevelOfActivityDTO, ShareLevelOfActivityDTO } from 'src/app/managementReport/model/getReports';
import { showActivityDto } from 'src/app/projectManagement/model/activity/activityDto';
import { ActivityConnectToApiService } from 'src/app/projectManagement/service/activity/activityConnectToApi/activity-connect-to-api.service';
import { AlertDialogBySweetAlertService } from 'src/app/shared/service/alertDialog/alert-dialog-by-sweet-alert.service';

@Component({
  selector: 'app-financial-report',
  templateUrl: './financial-report.component.html',
  styleUrls: ['./financial-report.component.scss',
  '../progress-report/progress-report.component.scss',
  '../../../../../projectManagement/page/activity/information-activity/page/activity-relationships/activity-relationships.component.scss'
]
})
export class FinancialReportComponent implements OnInit {

  public listPrepareShareLevelOfActivity: PrepareShareLevelOfActivityDTO[];
  public inputCustomStyle: InputCustomStyle;
  public reporterNameFormControl = new FormControl();
  public registrationDateFormControl = new FormControl();
  public reportAmounttFormControl = new FormControl();

  public registrationDate: string;

  public ProgressFormControl = new FormControl();
  public descreptionFormControl = new FormControl();
  public fileFormControl = new FormControl();

  public projectId: string;

  constructor(private reportConnectionToApiService: ReportConnectionToApiService,
    private activityConnectToApiService: ActivityConnectToApiService,
    private activeRouting: ActivatedRoute,
    private handleDisplayErrorService: HandleDisplayErrorService,
    private alertDialogBySweetAlertService: AlertDialogBySweetAlertService
    ) { }

  ngOnInit(): void {
    this.initInputStyle();
    this.initFormControl();
    this.setProjectId();
    this.getProjectctivity();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public getValue(){
    if(this.reporterNameFormControl.value && this.registrationDateFormControl.value && this.descreptionFormControl.value &&
      this.ProgressFormControl.value && this.fileFormControl.value &&
      this.reporterNameFormControl.valid && this.registrationDateFormControl.valid && this.descreptionFormControl.valid &&
      this.ProgressFormControl.valid && this.fileFormControl.valid){
        return true;
      }
      else{return false}
  }

  public sendProgressReport(){
    let listActivity = new Array<ShareLevelOfActivityDTO>();
    for(let i=0; i<this.listPrepareShareLevelOfActivity.length; i++) {
      if(this.listPrepareShareLevelOfActivity[i].isExist)listActivity.push(this.listPrepareShareLevelOfActivity[i].shareLevelOfActivity);
    }
    this.reportConnectionToApiService.registerAllocationReport(
      this.projectId, new RequestAllocationReportDTO(
        this.reporterNameFormControl.value,
        this.descreptionFormControl.value,
        this.reportAmounttFormControl.value,
        this.registrationDate,
        listActivity)).subscribe((res: ApiResult<string>) => {
          if(res.statusCode == 200 && res.isSuccess) {
            this.alertDialogBySweetAlertService.showSuccessAlert('گزارش با موفقیت ایجاد شد');
            this.reporterNameFormControl.reset();
            this.descreptionFormControl.reset();
            this.reportAmounttFormControl.reset();
            this.registrationDateFormControl.reset();
            this.prepareActivityList();
          } else {
            this.handleDisplayErrorService.showError(res.statusCode);
          }
        });
  }





  //////////


  public progressAmountControl: FormControl[];
  public activityList: showActivityDto[];
  public isEditMode: boolean = false;
  public panelOpenState: boolean = false;

  private setProjectId() {
    let id = this.activeRouting.snapshot.queryParamMap.get('projectId');
    if(id) this.projectId = id;
  }

  private getProjectctivity() {
    this.activityConnectToApiService.showActivities(
      this.projectId
    ).subscribe((res: ApiResult<showActivityDto[]>) => {
      this.activityList = res.data;
      this.prepareActivityList();
    });
  }

  private prepareActivityList() {
    this.listPrepareShareLevelOfActivity = new Array<PrepareShareLevelOfActivityDTO>();
    for(let i=0; i<this.activityList.length; i++) {
      this.progressAmountControl.push(new FormControl());
      this.listPrepareShareLevelOfActivity.push(
        new PrepareShareLevelOfActivityDTO(
          new ShareLevelOfActivityDTO(
            this.activityList[i].activityId, 0
          ), false
        )
      )
    }
  }

  private initFormControl() {
    this.progressAmountControl = new Array<FormControl>();
  }

  public changeEditMode(i: number) {
    this.listPrepareShareLevelOfActivity[i].isExist = !this.listPrepareShareLevelOfActivity[i].isExist;
  }

  public changePersentOfActivity(i: number, value: string) {
    this.listPrepareShareLevelOfActivity[i].shareLevelOfActivity.shareLevelOfActivity = Number(value);
  }

public togglePanel() {
    this.panelOpenState = !this.panelOpenState
}
}
