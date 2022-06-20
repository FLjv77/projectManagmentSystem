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
  @Input() inputCustomStyle: InputCustomStyle;
  @Input() inputFormControl: FormControl;
  @Input() haveEye: boolean;
  @Input() textarea:boolean;
  @Output() changeValue = new EventEmitter<string>();
  public hideInput: boolean = true;
  constructor() {
  }

  ngOnInit(): void {
    
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

  private subscribeChangeInputValue() {
    this.inputFormControl.valueChanges.subscribe((value: string) => {
      this.changeValue.emit(value);
    })
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
