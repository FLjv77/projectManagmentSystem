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
  @Input() minYear: number;
  @Input() minMount: number;
  @Input() minDay: number;
  @Input() inputId: string;
  @Input() inputLabel: string;
  @Input() inputError: string;
  @Input() type: string;
  @Input() inputCustomStyle: InputCustomStyle;
  @Input() inputFormControl: FormControl;
  @Input() haveEye: boolean;
  @Input() textarea: boolean;
  @Input() isDatePiker: boolean;
  @Input() changeValue1: any;
  @Output() changeValue = new EventEmitter<string>();
  public hideInput: boolean = true;
  public minDate: Date;
  constructor() {
  }

  ngOnInit(): void {
    this.minDate = new Date(this.minYear, this.minMount, this.minDay);
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
    date = date.substring(0, 10);

    this.changeValue.emit(date);
  }

  public myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
}
