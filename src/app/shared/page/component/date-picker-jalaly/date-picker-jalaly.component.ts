import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {noop} from "rxjs";
import {InputCustomStyle} from "../input-style/input-style.component";
import * as moment from "jalali-moment";
import { Moment } from 'jalali-moment';
import { MaterialPersianDateAdapter } from 'src/app/shared/service/jalalyDatePiker/material.persian-date.adapter';

@Component({
  selector: 'app-date-picker-jalaly',
  templateUrl: './date-picker-jalaly.component.html',
  styleUrls: ['./date-picker-jalaly.component.scss', '../input-style/input-style.component.scss']
})
export class DatePickerJalalyComponent implements OnInit {
  minDate: Date;
  @Input() inputId: string;
  @Input() inputLabel: string;
  @Input() inputError: string;
  @Input() type: string;
  @Input() inputCustomStyle: InputCustomStyle;
  @Input() inputFormControl: FormControl;
  @Input() haveEye: boolean;
  @Input() textarea: boolean;
  @Input() isDatePiker: boolean;
  @Output() changeValue = new EventEmitter<string>();
  public hideInput: boolean = true;
  constructor() {
  }

  ngOnInit(): void {

  const currentYear = new Date().getDate();
  this.minDate = new Date(currentYear);
  }
  addStyles(type:string) {
    let element = document.getElementById(this.inputId);
    element ? element.classList.add('holder') : noop();
  }
  removeStyles(value: FormControl) {
    if (!value) {
      let element = document.getElementById(this.inputId);
      element ? element.classList.remove('holder') : noop();
    }
  }

  ngAfterViewInit(): void {
  }


  onChange(event: any) {
    let x = moment(event.value).format("YYYY-MM-DD");
    let m: any = moment.from(x, 'fa', 'YYYY/MM/DD');

    let date = (m._i).toString();
    date = date.substring(0, 10) + 'T00:00:00.000Z';

    this.changeValue.emit(date);
  }
}
