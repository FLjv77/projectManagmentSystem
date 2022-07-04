import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edite-financial-report-information',
  templateUrl: './edite-financial-report-information.component.html',
  styleUrls: ['./edite-financial-report-information.component.scss',
    '../../../../createProjectProcess/page/project-creation-levels/project-creation-levels.component.scss']
})
export class EditeFinancialReportInformationComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public reporterNameFormControl = new FormControl();
  public saveDateFormControl = new FormControl();
  public progressFormControl = new FormControl();
  public descreptionReportFormControl = new FormControl();
  public uploadDocumentationProjectFormControl = new FormControl();

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
