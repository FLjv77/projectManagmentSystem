import { ShareLevelOfActivityDTO } from './../../../../model/modelDtoAllocationReport';
import { ReportConnectionToApiService } from './../../../../service/reportConnectionToApi/report-connection-to-api.service';
import { FormControl } from '@angular/forms';
import { InputCustomStyle } from './../../../../../shared/page/component/input-style/input-style.component';
import { Component, OnInit } from '@angular/core';
import { ProgressReportDTO } from 'src/app/managementReport/model/modelDtoAllocationReport';
import { ActivatedRoute } from '@angular/router';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { showActivityDto } from 'src/app/projectManagement/model/activity/activityDto';
import { ActivityConnectToApiService } from 'src/app/projectManagement/service/activity/activityConnectToApi/activity-connect-to-api.service';
import { HandleDisplayErrorService } from 'src/app/shared/service/handleError/handle-display-error.service';

@Component({
  selector: 'app-progress-report',
  templateUrl: './progress-report.component.html',
  styleUrls: ['./progress-report.component.scss', '../../../../../projectManagement/page/activity/information-activity/page/activity-relationships/activity-relationships.component.scss']
})
export class ProgressReportComponent implements OnInit {

  public inputCustomStyle: InputCustomStyle;
  public reporterNameFormControl = new FormControl();
  public registrationDateFormControl = new FormControl();
  public ProgressFormControl = new FormControl();
  public descreptionFormControl = new FormControl();
  public fileFormControl = new FormControl();

  public projectId: string;
  public listId: ShareLevelOfActivityDTO[];

  constructor(private reportConnectionToApiService: ReportConnectionToApiService,
    private activityConnectToApiService: ActivityConnectToApiService,
    private activeRouting: ActivatedRoute,
    private handleDisplayErrorService: HandleDisplayErrorService
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
    this.reportConnectionToApiService.RegisterProgressReport(
      this.projectId, new ProgressReportDTO(this.reporterNameFormControl.value,this.descreptionFormControl.value
        ,this.ProgressFormControl.value,this.registrationDateFormControl.value,this.listId)).subscribe(res =>{
          console.log(res);
        });
  }





  //////////


  public progressAmountControl: FormControl;
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

    });
  }

  private initFormControl() {
    this.progressAmountControl = new FormControl();
  }

  public changeEditMode() {
    this.isEditMode = !this.isEditMode;
  }


public togglePanel() {
    this.panelOpenState = !this.panelOpenState
}
}
