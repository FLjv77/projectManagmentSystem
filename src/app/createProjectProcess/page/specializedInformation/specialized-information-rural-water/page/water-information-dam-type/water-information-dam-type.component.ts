import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
    this.damStateControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.capacityWaterControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.riverNameControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.staffControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.volumeDamControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

  }

  private checkValidationForm() {
    if(
      this.damStateControl.value &&
      this.capacityWaterControl.value &&
      this.riverNameControl.value &&
      this.staffControl.value &&
      this.volumeDamControl.value
    ) {
      this.validationForm.emit(true);
    } else {
      this.validationForm.emit(false);
    }
  }
}
