import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-water-information-source-type',
  templateUrl: './water-information-source-type.component.html',
  styleUrls: ['./water-information-source-type.component.scss']
})
export class WaterInformationSourceTypeComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public sourceStateControl = new FormControl();
  public sourceStaffControl = new FormControl();
  public sourceVolumeControl = new FormControl();
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
