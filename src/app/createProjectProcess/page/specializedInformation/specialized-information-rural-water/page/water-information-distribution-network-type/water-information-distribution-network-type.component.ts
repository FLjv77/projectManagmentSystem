import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {InputCustomStyle} from "../../../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-water-information-distribution-network-type',
  templateUrl: './water-information-distribution-network-type.component.html',
  styleUrls: ['./water-information-distribution-network-type.component.scss']
})
export class WaterInformationDistributionNetworkTypeComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public networkStateControl = new FormControl();
  public pompControl = new FormControl();
  public lenPipeControl = new FormControl();
  public typePipeControl = new FormControl();
  @Output() validationForm = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.initInputStyle();
    this.subscribeChangeFormCoontrol();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }


  private subscribeChangeFormCoontrol() {
    this.networkStateControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.pompControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.lenPipeControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.typePipeControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });
  }

  private checkValidationForm() {
    if(
      this.networkStateControl.value &&
      this.pompControl.value &&
      this.lenPipeControl.value &&
      this.typePipeControl.value
    ) {
      this.validationForm.emit(true);
    } else {
      this.validationForm.emit(false);
    }
  }
}
