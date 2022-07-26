import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-water-information-well-type',
  templateUrl: './water-information-well-type.component.html',
  styleUrls: ['./water-information-well-type.component.scss']
})
export class WaterInformationWellTypeComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public amountOfSurfaceControl = new FormControl();
  public widthWellControl = new FormControl();
  public lenPipeControl = new FormControl();
  public lenColControl = new FormControl();
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
