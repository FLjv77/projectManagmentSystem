import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../../shared/page/component/input-style/input-style.component";
import {UntypedFormControl} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-financial-report-project',
  templateUrl: './financial-report-project.component.html',
  styleUrls: ['./financial-report-project.component.scss', '../../project-creation-levels.component.scss']
})
export class FinancialReportProjectComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public reporterNameFormControl = new UntypedFormControl();
  public saveDateFormControl = new UntypedFormControl();
  public progressFormControl = new UntypedFormControl();
  public descreptionReportFormControl = new UntypedFormControl();
  public uploadDocumentationProjectFormControl = new UntypedFormControl();

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
      return true;
    }
    else{return false}
  }

  public goNextStep() {
    this.router.navigate(['../../createProject/specializedInformationRuralHousing'])
  }
}
