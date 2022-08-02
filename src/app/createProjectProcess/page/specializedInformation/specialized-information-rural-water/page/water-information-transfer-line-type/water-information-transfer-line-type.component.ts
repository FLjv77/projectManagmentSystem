import { Component, OnInit,EventEmitter, Output} from '@angular/core';
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
    this.subscribeChangeFormCoontrol();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  @Output() validationForm = new EventEmitter<boolean>();

  private subscribeChangeFormCoontrol() {
    this.transferLineControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.pipeTypeControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.pipeLenControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.fromWhereControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.toWhereControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

  }

  private checkValidationForm() {
    if(
      this.transferLineControl.value &&
      this.pipeTypeControl.value &&
      this.pipeLenControl.value &&
      this.fromWhereControl.value &&
      this.toWhereControl.value
    ) {
      this.validationForm.emit(true);
    } else {
      this.validationForm.emit(false);
    }
  }
}
