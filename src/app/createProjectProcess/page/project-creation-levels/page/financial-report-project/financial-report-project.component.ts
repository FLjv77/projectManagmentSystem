import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {InputCustomStyle} from "../../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-financial-report-project',
  templateUrl: './financial-report-project.component.html',
  styleUrls: ['./financial-report-project.component.scss', '../../project-creation-levels.component.scss']
})
export class FinancialReportProjectComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public reporterNameFormControl = new FormControl();
  public saveDateFormControl = new FormControl();
  public progressFormControl = new FormControl();
  public descreptionReportFormControl = new FormControl();
  public uploadDocumentationProjectFormControl = new FormControl();
  @Output() formcontroleInputs= new EventEmitter<boolean>();

  constructor(private router: Router) { }


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
      this.descreptionReportFormControl.value && this.uploadDocumentationProjectFormControl.value &&
      this.reporterNameFormControl.valid && this.saveDateFormControl.valid && this.progressFormControl.valid &&
      this.descreptionReportFormControl.valid && this.uploadDocumentationProjectFormControl.valid){
      this.formcontroleInputs.emit(true);
      console.log(this.formcontroleInputs);
      return true;
    }
    else{return false}
  }

  // public goNextStep() {
  //   this.router.navigate(['../../createProject/specializedInformationRuralHousing'])
  // }
}
