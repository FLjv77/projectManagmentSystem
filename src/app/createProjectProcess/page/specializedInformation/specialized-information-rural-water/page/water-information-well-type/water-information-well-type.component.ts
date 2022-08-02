import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
    this.amountOfSurfaceControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.widthWellControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.lenPipeControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.lenColControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

  }

  private checkValidationForm() {
    if(
      this.amountOfSurfaceControl.value &&
      this.widthWellControl.value &&
      this.lenPipeControl.value &&
      this.lenColControl.value
    ) {
      this.validationForm.emit(true);
    } else {
      this.validationForm.emit(false);
    }
  }
}
