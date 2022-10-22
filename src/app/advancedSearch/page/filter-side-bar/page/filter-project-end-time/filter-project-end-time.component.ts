import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormControl} from "@angular/forms";
import {InputCustomStyle} from "../../../../../shared/page/component/input-style/input-style.component";

@Component({
  selector: 'app-filter-project-end-time',
  templateUrl: './filter-project-end-time.component.html',
  styleUrls: ['./filter-project-end-time.component.scss']
})
export class FilterProjectEndTimeComponent implements OnInit {
  @Output() endTimeOfProjectUpperBound = new EventEmitter<string>;
  @Output() endTimeOfProjectLowerBound = new EventEmitter<string>;

  public endDateEndFormControl = new FormControl;
  public startDateEndFormControl = new FormControl;
  public inputCustomStyle: InputCustomStyle;

  constructor() { }

  ngOnInit(): void {
    this.initInputStyle();
  }

  public setStartTime(event: string) {
    this.endTimeOfProjectLowerBound.emit(event);
  }

  public setEndTime(event: string) {
    this.endTimeOfProjectUpperBound.emit(event);
  }

  public clearFilter() {
    this.endTimeOfProjectUpperBound.emit(undefined);
    this.endTimeOfProjectLowerBound.emit(undefined);
    this.startDateEndFormControl.reset();
    this.endDateEndFormControl.reset();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }
}
