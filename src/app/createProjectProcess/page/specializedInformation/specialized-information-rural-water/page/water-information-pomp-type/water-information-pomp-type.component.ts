import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-water-information-pomp-type',
  templateUrl: './water-information-pomp-type.component.html',
  styleUrls: ['./water-information-pomp-type.component.scss']
})
export class WaterInformationPompTypeComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public pompStateControl = new FormControl();
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
