import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InputCustomStyle } from '../../../../../../shared/page/component/input-style/input-style.component';

@Component({
  selector: 'app-activity-by-detail',
  templateUrl: './activity-by-detail.component.html',
  styleUrls: ['./activity-by-detail.component.scss','../activity-relationships/activity-relationships.component.scss']
})
export class ActivityByDetailComponent implements OnInit {
  public weightTimeControl: FormControl;
  public weightCostControl: FormControl;
  public activityNameControl: FormControl;
  public inputCustomStyle: InputCustomStyle;
  public isEditMode: boolean = false;
  public panelOpenState: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.initFormControl();
    this.initInputStyle();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  private initFormControl() {
    this.weightCostControl = new FormControl();
    this.weightTimeControl = new FormControl();
    this.activityNameControl = new FormControl();
  }

  public changeEditMode() {
    this.isEditMode = !this.isEditMode;
  }


public togglePanel() {
    this.panelOpenState = !this.panelOpenState
}
}
