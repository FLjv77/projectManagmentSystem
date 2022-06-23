import { FormControl } from '@angular/forms';
import { InputCustomStyle } from './../../../shared/page/component/input-style/input-style.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-search-according-to-time',
  templateUrl: './advanced-search-according-to-time.component.html',
  styleUrls: ['./advanced-search-according-to-time.component.scss']
})
export class AdvancedSearchAccordingToTimeComponent implements OnInit {

  public inputCustomStyle: InputCustomStyle;
  public startDateFormControl = new FormControl;
  public endDateFormControl = new FormControl;

  constructor() { }

  ngOnInit(): void {
    this.initInputStyle();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

}