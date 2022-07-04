import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UntypedFormControl} from "@angular/forms";
import {noop} from "rxjs";
import {InputCustomStyle} from "../input-style/input-style.component";

@Component({
  selector: 'app-date-picker-jalaly',
  templateUrl: './date-picker-jalaly.component.html',
  styleUrls: ['./date-picker-jalaly.component.scss', '../input-style/input-style.component.scss']
})
export class DatePickerJalalyComponent implements OnInit {

  @Input() inputId: string;
  @Input() inputLabel: string;
  @Input() inputError: string;
  @Input() type: string;
  @Input() inputCustomStyle: InputCustomStyle;
  @Input() inputFormControl: UntypedFormControl;
  @Input() haveEye: boolean;
  @Input() textarea: boolean;
  @Input() isDatePiker: boolean;
  @Output() changeValue = new EventEmitter<string>();
  public hideInput: boolean = true;
  constructor() {
  }

  ngOnInit(): void {}
  addStyles(type:string) {
    let element = document.getElementById(this.inputId);
    element ? element.classList.add('holder') : noop();
  }
  removeStyles(value: UntypedFormControl) {
    if (!value) {
      let element = document.getElementById(this.inputId);
      element ? element.classList.remove('holder') : noop();
    }
  }

  private subscribeChangeInputValue() {
    this.inputFormControl.valueChanges.subscribe((value: string) => {
      this.changeValue.emit(value);
    })
  }

  ngAfterViewInit(): void {
    this.subscribeChangeInputValue();
  }

}
