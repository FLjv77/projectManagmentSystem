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
    let toggle = document.getElementById('toggle');

    if(this.isFirstValueSelected) {
      this.selectedValue = this.firstValue;
      if (toggle) {
        toggle.classList.remove('toggle-cycle-1');
        toggle.classList.add('toggle-cycle-2');
      }
    } else {
      this.selectedValue = this.secondValue;
      if (toggle) {
        toggle.classList.add('toggle-cycle-1');
        toggle.classList.remove('toggle-cycle-2');
      }
    }
  }

  public changeSelectedValue(value: string) {
    if (this.selectedValue != value) {
      if (this.isFirstValueSelected) {
        this.handleSelectedValue.emit(this.secondValue);
      } else {
        this.handleSelectedValue.emit(this.firstValue);
      }
    }
  }

  public changeSelectedValueFirst() {
    let toggle = document.getElementById('toggle');

    if (this.selectedValue == this.firstValue) {

    } else {
      this.handleSelectedValue.emit(this.firstValue);
    }
  }

  public changeSelectedValueSecond() {
    let toggle = document.getElementById('toggle');

    if(this.selectedValue == this.secondValue) {

    } else {
      this.handleSelectedValue.emit(this.secondValue);
    }

  }
}
