import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-water-information-purification-type',
  templateUrl: './water-information-purification-type.component.html',
  styleUrls: ['./water-information-purification-type.component.scss']
})
export class WaterInformationPurificationTypeComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public informationStateControl = new FormControl();
  public electricStateControl = new FormControl();
  public capacityStateControl = new FormControl();
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
