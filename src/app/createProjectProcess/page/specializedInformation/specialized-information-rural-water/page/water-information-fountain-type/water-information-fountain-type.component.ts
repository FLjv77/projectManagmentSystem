import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-water-information-fountain-type',
  templateUrl: './water-information-fountain-type.component.html',
  styleUrls: ['./water-information-fountain-type.component.scss']
})
export class WaterInformationFountainTypeComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public damStateControl = new FormControl();
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
