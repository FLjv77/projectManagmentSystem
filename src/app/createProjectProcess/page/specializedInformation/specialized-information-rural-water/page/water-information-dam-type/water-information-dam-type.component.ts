import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-water-information-dam-type',
  templateUrl: './water-information-dam-type.component.html',
  styleUrls: ['./water-information-dam-type.component.scss']
})
export class WaterInformationDamTypeComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public damStateControl = new FormControl();
  public capacityWaterControl = new FormControl();
  public riverNameControl = new FormControl();
  public staffControl = new FormControl();
  public volumeDamControl = new FormControl();
  public detailControl = new FormControl();
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
