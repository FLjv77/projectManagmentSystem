import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {InputCustomStyle} from "../../../../shared/page/component/input-style/input-style.component";

@Component({
  selector: 'app-specialized-information-removal-marginalization',
  templateUrl: './specialized-information-removal-marginalization.component.html',
  styleUrls: ['./specialized-information-removal-marginalization.component.scss',
    '../../project-creation-levels/project-creation-levels.component.scss']
})
export class SpecializedInformationRemovalMarginalizationComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;

  public stateControl = new FormControl();
  public cityControl = new FormControl();
  public zoneControl = new FormControl();
  public projectType = new FormControl();
  public grandType = new FormControl();
  public requirementControl = new FormControl();
  public equipmentControl = new FormControl();
  public requirementList: Array<string>;
  public equipmentList: Array<string>;

  constructor() { }

  ngOnInit(): void {
    this.initInputStyle();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public addRequirement() {
    if (!this.requirementList) this.requirementList = new Array<string>();
    this.requirementList.push(this.requirementControl.value);
    this.requirementControl.reset();
  }

  public removeRequirement(index: number) {
    this.requirementList.splice(index, 1);
  }

}
