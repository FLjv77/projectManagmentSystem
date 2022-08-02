import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {InputCustomStyle} from "../../../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-water-information-source-type',
  templateUrl: './water-information-source-type.component.html',
  styleUrls: ['./water-information-source-type.component.scss']
})
export class WaterInformationSourceTypeComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public sourceStateControl = new FormControl();
  public sourceStaffControl = new FormControl();
  public sourceVolumeControl = new FormControl();
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
    this.sourceStateControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.sourceStaffControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.sourceVolumeControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

  }

  private checkValidationForm() {
    if(
      this.sourceStateControl.value &&
      this.sourceStaffControl.value &&
      this.sourceVolumeControl.value
    ) {
      this.validationForm.emit(true);
    } else {
      this.validationForm.emit(false);
    }
  }
}
