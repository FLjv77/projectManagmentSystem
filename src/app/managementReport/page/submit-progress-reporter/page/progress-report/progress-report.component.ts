import { ProgressReportDTO } from 'src/app/managementReport/model/modelDtoAllocationReport';
import { ReportConnectionToApiService } from './../../../../service/reportConnectionToApi/report-connection-to-api.service';
import { FormControl } from '@angular/forms';
import { InputCustomStyle } from './../../../../../shared/page/component/input-style/input-style.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { showActivityDto } from 'src/app/projectManagement/model/activity/activityDto';
import { ActivityConnectToApiService } from 'src/app/projectManagement/service/activity/activityConnectToApi/activity-connect-to-api.service';
import { HandleDisplayErrorService } from 'src/app/shared/service/handleError/handle-display-error.service';
import { PrepareShareLevelOfActivityDTO, ShareLevelOfActivityDTO } from 'src/app/managementReport/model/getReports';
import { AlertDialogBySweetAlertService } from 'src/app/shared/service/alertDialog/alert-dialog-by-sweet-alert.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-progress-report',
  templateUrl: './progress-report.component.html',
  styleUrls: ['./progress-report.component.scss',
  '../../../../../projectManagement/page/activity/information-activity/page/activity-relationships/activity-relationships.component.scss']
})
export class ProgressReportComponent implements OnInit {

  private listActivity = new Array<ShareLevelOfActivityDTO>();
  public listPrepareShareLevelOfActivity: PrepareShareLevelOfActivityDTO[];
  public inputCustomStyle: InputCustomStyle;
  public reporterNameFormControl = new FormControl();
  public registrationDateFormControl = new FormControl();
  public registrationDate: string;
  public createdReportId: string;

  public ProgressFormControl = new FormControl();
  public descreptionFormControl = new FormControl();
  public fileFormControl = new FormControl();

  public projectId: string;

  constructor(private reportConnectionToApiService: ReportConnectionToApiService,
    private activityConnectToApiService: ActivityConnectToApiService,
    private activeRouting: ActivatedRoute,
    private alertDialogBySweetAlertService: AlertDialogBySweetAlertService,
    private handleDisplayErrorService: HandleDisplayErrorService,
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
      this.ProgressFormControl.value > 0 && this.ProgressFormControl.value < 100 &&
      this.ProgressFormControl.value && this.registrationDate && this.listActivity.length > 0){
        return false;
      }
      else{return true}
  }

  private changeActivityList() {
    for(let i=0; i<this.listPrepareShareLevelOfActivity.length; i++) {
      if(this.listPrepareShareLevelOfActivity[i].isExist){
        if(this.listActivity.indexOf(this.listPrepareShareLevelOfActivity[i].shareLevelOfActivity) < 0) this.listActivity.push(this.listPrepareShareLevelOfActivity[i].shareLevelOfActivity);
      }
      else {
        let index = this.listActivity.indexOf(this.listPrepareShareLevelOfActivity[i].shareLevelOfActivity);
        if (index > -1) this.listActivity.splice(index, 1);
      }
    }
  }


  public sendProgressReport() {
    this.reportConnectionToApiService.RegisterProgressReport(
      this.projectId, new ProgressReportDTO(
        this.reporterNameFormControl.value,
        this.descreptionFormControl.value,
        this.ProgressFormControl.value,
        this.registrationDate,
        this.listActivity)).subscribe((res) => {
          if(res.statusCode == 200 && res.isSuccess) {
            this.alertDialogBySweetAlertService.showSuccessAlert('گزارش با موفقیت ایجاد شد');
            this.createdReportId = res.data;
            this.onChange(this.valueUpload);
          } else {
            this.handleDisplayErrorService.showError(res.statusCode);
          }
        }, (err: HttpErrorResponse) => {
          this.handleError.showError(err.status);
        });
  }

  //////////

  public progressAmountControl: FormControl[];
  public activityList: showActivityDto[] = [];
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
    this.initFormControl();
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

  public progressActivityObserve(value: string) {
    if(Number(value) > 100) this.ProgressFormControl.reset();
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
    if(Number(value) <= 100) this.listPrepareShareLevelOfActivity[i].shareLevelOfActivity.shareLevelOfActivity = Number(value);
    else this.progressAmountControl[i].reset();
  }

  public togglePanel() {
    this.panelOpenState = !this.panelOpenState
  }

  public handleUploadFile(state: boolean) {
    if(state) {
      this.reporterNameFormControl.reset();
      this.descreptionFormControl.reset();
      this.registrationDateFormControl.reset();
      this.ProgressFormControl.reset();
      this.listActivity = new Array<ShareLevelOfActivityDTO>();
      this.prepareActivityList();
      // this.alertDialogBySweetAlertService.showSuccessAlert('مستندات گزارش با موفقیت ایجاد شد');
    }
  }

  public fileUrl: string;
  public loading: boolean = false;
  public filePath: string;
  public file: File;


  public initFilePath() {
    this.filePath = 'بارگذاری مستندات تخصیص پروژه';
  }

  public valueUpload:File;
  public setChange(event: any){
    this.valueUpload = event;
  }
  public onChange(event: any) {
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.fileUrl = reader.result as string;
      this.filePath = event.target.files[0].name;
    }
    reader.readAsDataURL(this.file);

      this.reportConnectionToApiService.UploadDocumentsOfProgressReport(
        this.createdReportId, this.file
        ).subscribe((res: ApiResult<boolean>) => {
          if(res.statusCode == 200 && res.isSuccess && res.data) {
            this.handleUploadFile(true);
            // this.inputFormControl.reset();
            this.filePath = '';
          } else {
            this.handleUploadFile(false);
            this.handleError.showError(res.statusCode);
          }
        }, (err: HttpErrorResponse) => {
          this.handleError.showError(err.status);
        });

  }
}
