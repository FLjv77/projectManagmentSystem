import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() startTimeOfProjectUpperBound = new EventEmitter<string>;
  @Output() startTimeOfProjectLowerBound = new EventEmitter<string>;
  constructor() { }

  ngOnInit(): void {
    this.initInputStyle();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public setStartTime(event: string) {
    this.startTimeOfProjectLowerBound.emit(event);
  }

  public setEndTime(event: string) {
    this.startTimeOfProjectUpperBound.emit(event);
  }


  public clearFilter() {
    this.startTimeOfProjectLowerBound.emit(undefined);
    this.startTimeOfProjectUpperBound.emit(undefined);
    this.startDateStartFormControl.reset();
    this.endDateStartFormControl.reset();
  }
}
