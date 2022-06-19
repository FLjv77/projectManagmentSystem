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
  @Input() nortiInputCustomStyle: NortiInputCustomStyle;
  @Input() inputFormControl: FormControl;
  @Output() changeValue = new EventEmitter<string>();
  constructor() {
  }

  ngOnInit(): void {}
  addStyles() {
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

export class NortiInputCustomStyle {
  colorText: string;
  lineColor: string;
  labelColor: string;

  constructor(colorText: string, lineColor: string, labelColor: string) {
    this.colorText = colorText;
    this.lineColor = lineColor;
    this.labelColor = labelColor;
  }
}
