import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl } from '@angular/forms';
import {noop} from "rxjs";


@Component({
  selector: 'app-input-style',
  templateUrl: './input-style.component.html',
  styleUrls: ['./input-style.component.scss']
})
export class InputStyleComponent implements OnInit, AfterViewInit {
  @Input() inputId: string;
  @Input() inputLabel: string;
  @Input() inputError: string;
  @Input() type: string;
  @Input() label: string;
  @Input() inputCustomStyle: InputCustomStyle;
  @Input() inputFormControl: FormControl;
  @Input() haveEye: boolean;
  @Input() textarea: boolean;
  @Input() isDatePiker: boolean;
  @Input() haveLimit: boolean;
  @Input() maxValue: number;
  @Input() minValue: number;
  @Output() changeValue = new EventEmitter<string>();
  public hideInput: boolean = true;
  constructor() {
  }

  ngOnInit(): void {
    this.subscribeChangePhoneNumber();
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

  private subscribeChangePhoneNumber() {
    if(this.type == 'phone') {
          this.inputFormControl.valueChanges.subscribe((res: string) => {
      if(res) {
        let state1 = res.substr(0,1) == '0';
        let state2 = res.length == 11;

        if(state1 && state2) {
          this.inputError = '';
        } else {
          this.inputError = 'شماره تلفن نامعتبر';
        }
      } else {
        this.inputError = '';
      }
    });
    }

  }

  private subscribeChangeInputValue() {
    this.inputFormControl.valueChanges.subscribe((value) => {
      if (this.haveLimit) {
        if (value >= this.minValue && value <= this.maxValue) {
          this.changeValue.emit(value);
        } else {
          this.inputFormControl.reset();
        }
      } else {
        this.changeValue.emit(value);
      }
    });
  }

  ngAfterViewInit(): void {
    this.subscribeChangeInputValue();
  }

}

export class InputCustomStyle {
  colorText: string;
  lineColor: string;
  labelColor: string;

  constructor(colorText: string, lineColor: string, labelColor: string) {
    this.colorText = colorText;
    this.lineColor = lineColor;
    this.labelColor = labelColor;
  }
}
