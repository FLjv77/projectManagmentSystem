import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-input-style',
  templateUrl: './input-style.component.html',
  styleUrls: ['./input-style.component.scss']
})
export class InputStyleComponent implements OnInit {
  @Input() ring: boolean;
  @Input() inputId: string;
  @Input() inputLabel: string;
  @Input() inputError: string;
  @Input() type: string;
  @Input() nortiInputCustomStyle: NortiInputCustomStyle;
  @Input() inputFormControl: FormControl;
  @Output() changeValue = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {}
  addStyles() {
    //document.getElementById(this.inputId).classList.add('holder');
  }
  removeStyles(value: FormControl) {
    //if (!value) document.getElementById(this.inputId).classList.remove('holder');
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