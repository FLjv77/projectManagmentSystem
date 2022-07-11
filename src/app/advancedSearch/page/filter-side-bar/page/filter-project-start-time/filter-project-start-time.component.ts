import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {InputCustomStyle} from "../../../../../shared/page/component/input-style/input-style.component";

@Component({
  selector: 'app-filter-project-start-time',
  templateUrl: './filter-project-start-time.component.html',
  styleUrls: ['./filter-project-start-time.component.scss']
})
export class FilterProjectStartTimeComponent implements OnInit {
  public startDateStartFormControl = new FormControl;
  public endDateStartFormControl = new FormControl;
  public inputCustomStyle: InputCustomStyle;

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
