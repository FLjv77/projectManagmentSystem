import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {InputCustomStyle} from "../../../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-water-information-water-seal-type',
  templateUrl: './water-information-water-seal-type.component.html',
  styleUrls: ['./water-information-water-seal-type.component.scss']
})
export class WaterInformationWaterSealTypeComponent implements OnInit {
  @Output() validationForm = new EventEmitter<boolean>();
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
    this.subscribeChangeFormCoontrol();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  private subscribeChangeFormCoontrol() {
    this.riverNameControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.resourceSaveWaterStateControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.pompControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.stopFloodControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.riverWidthControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.lenControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.heightControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });
  }

  private checkValidationForm() {
    if(
      this.riverNameControl.value &&
      this.resourceSaveWaterStateControl.value &&
      this.stopFloodControl.value &&
      this.pompControl.value &&
      this.riverWidthControl.value &&
      this.lenControl.value &&
      this.heightControl.value
    ) {
      this.validationForm.emit(true);
    } else {
      this.validationForm.emit(false);
    }
  }
}
