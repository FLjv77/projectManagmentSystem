import { ProgressReportDTO } from 'src/app/managementReport/model/modelDtoAllocationReport';
import { ReportConnectionToApiService } from './../../../../../managementReport/service/reportConnectionToApi/report-connection-to-api.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../../shared/page/component/input-style/input-style.component";

@Component({
  selector: 'app-development-report-project',
  templateUrl: './development-report-project.component.html',
  styleUrls: ['./development-report-project.component.scss','../../project-creation-levels.component.scss']
})
export class DevelopmentReportProjectComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public reporterNameFormControl = new FormControl();
  public saveDateFormControl = new FormControl();
  public progressFormControl = new FormControl();
  public descreptionReportFormControl = new FormControl();
  public uploadDocumentationProjectFormControl = new FormControl();
  public valueInputReport: boolean;
  private projectId: string;


  constructor(private reportConnectionToApiService: ReportConnectionToApiService) {}


  ngOnInit(): void {
    this.initInputStyle();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }
  public getValue(){
    if(this.reporterNameFormControl.value && this.saveDateFormControl.value && this.progressFormControl.value &&
      this.descreptionReportFormControl.value &&
      this.reporterNameFormControl.valid && this.saveDateFormControl.valid && this.progressFormControl.valid &&
      this.descreptionReportFormControl.valid){
        return true;
      }
      else{return false}
  }
  
  public getValue1(){
    if(this.uploadDocumentationProjectFormControl.value){
        return true;
      }
      else{return false}
  }

  public getValueAll(){
    return true;
  }

  public sendInfo(){
    // this.reportConnectionToApiService.RegisterProgressReport(this.projectId , new ProgressReportDTO(this.reporterNameFormControl.value,
    //   this.descreptionReportFormControl.value,this.progressFormControl.value,this.saveDateFormControl.value,))
  }
}