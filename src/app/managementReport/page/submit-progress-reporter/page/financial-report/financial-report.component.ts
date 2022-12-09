import { InputCustomStyle } from './../../../../../shared/page/component/input-style/input-style.component';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ReportConnectionToApiService } from '../../../../service/reportConnectionToApi/report-connection-to-api.service';
import { RequestAllocationReportDTO } from 'src/app/managementReport/model/modelDtoAllocationReport';
import { ApiResult } from '../../../../../auth/model/authDTO';
import { HandleDisplayErrorService } from '../../../../../shared/service/handleError/handle-display-error.service';
import { ActivatedRoute } from '@angular/router';
import { PrepareShareLevelOfActivityDTO, ShareLevelOfActivityDTO } from 'src/app/managementReport/model/getReports';
import { showActivityDto } from 'src/app/projectManagement/model/activity/activityDto';
import { ActivityConnectToApiService } from 'src/app/projectManagement/service/activity/activityConnectToApi/activity-connect-to-api.service';
import { AlertDialogBySweetAlertService } from 'src/app/shared/service/alertDialog/alert-dialog-by-sweet-alert.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-financial-report',
  templateUrl: './financial-report.component.html',
  styleUrls: ['./financial-report.component.scss',
  '../progress-report/progress-report.component.scss',
  '../../../../../projectManagement/page/activity/information-activity/page/activity-relationships/activity-relationships.component.scss'
]
})
export class FinancialReportComponent implements OnInit {
  private listActivity = new Array<ShareLevelOfActivityDTO>();
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
    private alertDialogBySweetAlertService: AlertDialogBySweetAlertService,
    private handleError: HandleDisplayErrorService,
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
    if(this.reporterNameFormControl.value && this.descreptionFormControl.value &&
      this.reportAmounttFormControl.value && this.reportAmounttFormControl.value > 0 &&
       this.registrationDate && this.listActivity.length > 0){
        return false;
      }
      else{return true}
  }

  public sendProgressReport() {
    this.reportConnectionToApiService.registerAllocationReport(
      this.projectId, new RequestAllocationReportDTO(
        this.reporterNameFormControl.value,
        this.descreptionFormControl.value,
        this.reportAmounttFormControl.value,
        this.registrationDate,
        this.listActivity)).subscribe((res: ApiResult<string>) => {
          if(res.statusCode == 200 && res.isSuccess) {
            this.alertDialogBySweetAlertService.showSuccessAlert('گزارش با موفقیت ایجاد شد');
            this.reporterNameFormControl.reset();
            this.descreptionFormControl.reset();
            this.reportAmounttFormControl.reset();
            this.registrationDateFormControl.reset();
            this.listActivity = new Array<ShareLevelOfActivityDTO>();
            this.prepareActivityList();
          } else {
            this.handleDisplayErrorService.showError(res.statusCode);
          }
        }, (err: HttpErrorResponse) => {
          this.handleError.showError(err.status);
        });
  }



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
    this.initFormControl();
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


  private changeActivityList() {
    for(let i=0; i<this.listPrepareShareLevelOfActivity.length; i++) {
      if(this.listPrepareShareLevelOfActivity[i].isExist) this.listActivity.push(this.listPrepareShareLevelOfActivity[i].shareLevelOfActivity);
      else {
        let index = this.listActivity.indexOf(this.listPrepareShareLevelOfActivity[i].shareLevelOfActivity);
        if (index > -1) this.listActivity.splice(index, 1);
      }
    }
  }

  private initFormControl() {
    this.progressAmountControl = new Array<FormControl>();
  }

  public changeEditMode(i: number) {
    if(this.listPrepareShareLevelOfActivity[i].isExist) {
      this.progressAmountControl[i].reset();
    }
    this.listPrepareShareLevelOfActivity[i].isExist = !this.listPrepareShareLevelOfActivity[i].isExist;
    this.changeActivityList();
  }

  public changePersentOfActivity(i: number, value: string) {
    this.listPrepareShareLevelOfActivity[i].shareLevelOfActivity.shareLevelOfActivity = Number(value);
  }

  public togglePanel() {
      this.panelOpenState = !this.panelOpenState
  }
}
