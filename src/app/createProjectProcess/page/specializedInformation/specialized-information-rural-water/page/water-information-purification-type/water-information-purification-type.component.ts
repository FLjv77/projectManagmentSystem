import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
    this.informationStateControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.electricStateControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.capacityStateControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

  }

  private checkValidationForm() {
    if(
      this.informationStateControl.value &&
      this.electricStateControl.value &&
      this.capacityStateControl.value
    ) {
      this.validationForm.emit(true);
    } else {
      this.validationForm.emit(false);
    }
  }
}
