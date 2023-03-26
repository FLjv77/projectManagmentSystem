import { NumberFormatService } from './../../../service/numberFormat/number-format.service';
import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl } from '@angular/forms';
import {noop} from "rxjs";
import { Units } from 'src/app/shared/model/unit';
import {lengthUnits, ereaUnits, volumeUnit, priceUnit} from '../../../model/unit'

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
  @Input() separate: boolean;
  @Input() maxValue: number;
  @Input() minValue: number;
  @Input() unit: Units;
  @Input() disabled: boolean;
  @Input() authInput: boolean;
  @Output() changeValue = new EventEmitter<string>();
  public hideInput: boolean = true;
  constructor(public numberFormatService:NumberFormatService) {
  }

  ngOnInit(): void {
    this.subscribeChangePhoneNumber();  
    // const number = new Intl.NumberFormat('en-US', {style : "decimal" }).format(987654321);
    // console.log(number)  
  }

  addStyles(type:string) {
    let element = document.getElementById(this.inputId);
    element ? element.classList.add('holder') : noop();
  }

  public setseparate(value: any){
    this.numberFormatService.separate(value);
  }

  public emitValue($event:any){
    this.inputFormControl.setValue(this.numberFormatService.separate($event));
    this.changeValue.emit(this.numberFormatService.separate($event));
  }

  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  removeStyles(value: FormControl) {
    if (!value) {
      let element = document.getElementById(this.inputId);
      element ? element.classList.remove('holder') : noop();
    }
    this.emitValue(value);
  }

  public setNumberValue(event:any){
    console.log();
        
    event.replace(/\D/g, '');
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

  public getUnits(): string[] {
    let res = [''];
    switch(this.unit) {
      case Units.erea: {
        res = ereaUnits;
      } break;

      case Units.length: {
        res = lengthUnits;
      } break;

      case Units.price: {
        res = priceUnit;
      } break;

      case Units.volume: {
        res = volumeUnit;
      } break;
    }
    return res;
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
