import { FormControl } from '@angular/forms';
import { InputCustomStyle } from './../../../../../../../../shared/page/component/input-style/input-style.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-progress-report-modal',
  templateUrl: './record-progress-report-modal.component.html',
  styleUrls: ['./record-progress-report-modal.component.scss']
})
export class RecordProgressReportModalComponent implements OnInit {

  public inputCustomStyle: InputCustomStyle;
  public recordDateFormControl = new FormControl();
  public approvedProgressPercentageFormControl = new FormControl();
  public descreptionFormControl = new FormControl();
  public reporterNameFormControl = new FormControl();

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
    const modal = document.getElementById('record-progress-report');
    modal?.classList.add('out');
  }
}
