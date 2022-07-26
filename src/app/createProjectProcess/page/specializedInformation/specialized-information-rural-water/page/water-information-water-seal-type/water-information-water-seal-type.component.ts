import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-water-information-water-seal-type',
  templateUrl: './water-information-water-seal-type.component.html',
  styleUrls: ['./water-information-water-seal-type.component.scss']
})
export class WaterInformationWaterSealTypeComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public riverNameControl = new FormControl();
  public resourceSaveWaterStateControl = new FormControl();
  public pompControl = new FormControl();
  public stopFloodControl = new FormControl();
  public riverWidthControl = new FormControl();
  public stuffWaterSealControl = new FormControl();
  public widthControl = new FormControl();
  public lenControl = new FormControl();
  public heightControl = new FormControl();
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
