import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-water-information-transfer-line-type',
  templateUrl: './water-information-transfer-line-type.component.html',
  styleUrls: ['./water-information-transfer-line-type.component.scss']
})
export class WaterInformationTransferLineTypeComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public transferLineControl = new FormControl();
  public pipeTypeControl = new FormControl();
  public pipeLenControl = new FormControl();
  public fromWhereControl = new FormControl();
  public toWhereControl = new FormControl();
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
