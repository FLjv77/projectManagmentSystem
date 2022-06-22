import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-boolean-custom-toggle',
  templateUrl: './boolean-custom-toggle.component.html',
  styleUrls: ['./boolean-custom-toggle.component.scss']
})
export class BooleanCustomToggleComponent implements OnInit {

  @Input() firstValue: string;
  @Input() secondValue: string;
  @Input() isFirstValueSelected: boolean;
  @Output() handleSelectedValue = new EventEmitter<string>();
  public selectedValue: string;

  constructor() { }

  ngOnInit(): void {
    this.initSelectedValue();
  }

  private initSelectedValue() {
    if(this.isFirstValueSelected) {
      this.selectedValue = this.firstValue;
    } else {
      this.selectedValue = this.secondValue;
      let toggle = document.getElementById('toggle');
      if (toggle) toggle.style.left = '0';
      if (toggle) toggle.style.right = 'unset';
    }
  }

  public changeSelectedValue() {
    let toggle = document.getElementById('toggle');

    if (this.selectedValue == this.firstValue) {
      this.selectedValue = this.secondValue;
      if (toggle) toggle.style.left = '0';
      if (toggle) toggle.style.right = 'unset';
    } else {
      this.selectedValue = this.firstValue;
      if (toggle) toggle.style.right = '0';
      if (toggle) toggle.style.left = 'unset';
    }

    this.handleSelectedValue.emit(this.selectedValue);
  }
}
