import { ShareLevelOfActivityDTO } from './../../../../model/modelDtoAllocationReport';
import { ReportConnectionToApiService } from './../../../../service/reportConnectionToApi/report-connection-to-api.service';
import { FormControl } from '@angular/forms';
import { InputCustomStyle } from './../../../../../shared/page/component/input-style/input-style.component';
import { Component, OnInit } from '@angular/core';
import { ProgressReportDTO } from 'src/app/managementReport/model/modelDtoAllocationReport';

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

  constructor(private reportConnectionToApiService: ReportConnectionToApiService) { }

  ngOnInit(): void {
    this.initInputStyle();
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
}
