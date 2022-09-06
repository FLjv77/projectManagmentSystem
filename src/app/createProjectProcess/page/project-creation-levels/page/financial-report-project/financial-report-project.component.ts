import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {InputCustomStyle} from "../../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-financial-report-project',
  templateUrl: './financial-report-project.component.html',
  styleUrls: ['./financial-report-project.component.scss', '../../project-creation-levels.component.scss']
})
export class FinancialReportProjectComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public reporterNameFormControl = new FormControl();
  public saveDateFormControl = new FormControl();
  public paymentDateFormControl = new FormControl();
  public progressFormControl = new FormControl();
  public descreptionReportFormControl = new FormControl();
  public uploadDocumentationProjectFormControl = new FormControl();
  @Output() validationForm = new EventEmitter<boolean>();

  constructor() { }


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

  public sendInfo(){}

}
