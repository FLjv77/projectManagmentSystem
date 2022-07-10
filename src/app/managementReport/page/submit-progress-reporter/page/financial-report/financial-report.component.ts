import { InputCustomStyle } from './../../../../../shared/page/component/input-style/input-style.component';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial-report',
  templateUrl: './financial-report.component.html',
  styleUrls: ['./financial-report.component.scss']
})
export class FinancialReportComponent implements OnInit {

  public inputCustomStyle: InputCustomStyle;
  //public reporterNameFormControl = new FormControl();
  public registrationDateFormControl = new FormControl();
  public reportedCostFormControl = new FormControl();
  public descreptionReportFormControl = new FormControl();
  public financialDocumentsFormControl = new FormControl();

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
    if(this.registrationDateFormControl.value && this.reportedCostFormControl.value &&
      this.descreptionReportFormControl.value && this.financialDocumentsFormControl.value &&
      this.registrationDateFormControl.valid && this.reportedCostFormControl.valid &&
      this.descreptionReportFormControl.valid && this.financialDocumentsFormControl.valid){
        return true;
      }
      else{return false}
  }
}
