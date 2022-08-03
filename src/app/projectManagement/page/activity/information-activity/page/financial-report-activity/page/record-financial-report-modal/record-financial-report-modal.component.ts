import { FormControl } from '@angular/forms';
import { InputCustomStyle } from './../../../../../../../../shared/page/component/input-style/input-style.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-financial-report-modal',
  templateUrl: './record-financial-report-modal.component.html',
  styleUrls: ['./record-financial-report-modal.component.scss']
})
export class RecordFinancialReportModalComponent implements OnInit {

  public inputCustomStyle: InputCustomStyle;
  public recordDateFormControl = new FormControl();
  public reporterNameFormControl = new FormControl();
  public approvedProgressPercentageFormControl = new FormControl();
  public descreptionFormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.initInputStyle();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  closeModal() {
    const modal = document.getElementById('record-financial-report');
    modal?.classList.add('out');
  }
}
