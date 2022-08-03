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
    this.subscribeChangeFormCoontrol();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }
  private subscribeChangeFormCoontrol() {
    this.reporterNameFormControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.saveDateFormControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.paymentDateFormControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.progressFormControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.descreptionReportFormControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.uploadDocumentationProjectFormControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

  }

  private checkValidationForm() {
    if(
      this.reporterNameFormControl.value &&
      this.saveDateFormControl.value &&
      this.paymentDateFormControl.value &&
      this.progressFormControl.value &&
      this.descreptionReportFormControl.value &&
      this.uploadDocumentationProjectFormControl.value
    ) {
      this.validationForm.emit(true);
    } else {
      this.validationForm.emit(false);
    }
  }
}
