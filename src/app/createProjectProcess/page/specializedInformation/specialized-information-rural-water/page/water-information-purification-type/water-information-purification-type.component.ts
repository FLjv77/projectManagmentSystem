import { projectType } from './../../../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {InputCustomStyle} from "../../../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-water-information-purification-type',
  templateUrl: './water-information-purification-type.component.html',
  styleUrls: ['./water-information-purification-type.component.scss','../../specialized-information-rural-water.component.scss']
})
export class WaterInformationPurificationTypeComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public informationStateControl = new FormControl();
  public electricStateControl = new FormControl();
  public capacityStateControl = new FormControl();
  public regionControl = new FormControl();
  public stabilityResourceControl = new FormControl();
  public debeyControl = new FormControl();
  public ownerShipTypeControl = new FormControl();
  public groundTypeControl = new FormControl();
  public number = new FormControl();
  @Output() validationForm = new EventEmitter<boolean>();
  public arrayList: Array<string> = ['2223'];
  public typeProject: projectType;

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

    this.regionControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.stabilityResourceControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.debeyControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.ownerShipTypeControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.groundTypeControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.number.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

  }

  private checkValidationForm() {
    if(
      this.informationStateControl.value &&
      this.electricStateControl.value &&
      this.capacityStateControl.value &&
      this.regionControl.value && 
      this.stabilityResourceControl.value &&
      this.debeyControl.value &&
      this.ownerShipTypeControl.value &&
      this.groundTypeControl.value &&
      this.number.value
    ) {
      this.validationForm.emit(true);
    } else {
      this.validationForm.emit(false);
    }
  }

  public addList(){
    this.arrayList.push('222');
  }
  public setTypeProject(state: projectType){
    this.typeProject = state;
  }
  
}
