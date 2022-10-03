import { projectType } from './../../../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {InputCustomStyle} from "../../../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";
import { TankWaterShedAndCanals } from 'src/app/createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';

@Component({
  selector: 'app-water-information-source-type',
  templateUrl: './water-information-source-type.component.html',
  styleUrls: ['./water-information-source-type.component.scss','../../specialized-information-rural-water.component.scss']
})
export class WaterInformationSourceTypeComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public sourceStateControl = new FormControl();
  public sourceStaffControl = new FormControl();
  public sourceVolumeControl = new FormControl();
  public regionControl = new FormControl();
  public stabilityResourceControl = new FormControl();
  public debeyControl = new FormControl();
  public ownerShipTypeControl = new FormControl();
  public groundTypeControl = new FormControl();
  public number = new FormControl();
  @Output() validationForm = new EventEmitter<boolean>();
  public arrayList: Array<string> = ['2223'];
  public typeProject: projectType;
  public typeProjectList: Array<number> = [];
  public tankList: TankWaterShedAndCanals[] = [];

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
      this.sourceStateControl.value &&
      this.sourceStaffControl.value &&
      this.sourceVolumeControl.value &&
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

  public setTypeProject(state: projectType,index: number){
    this.typeProject = state;
    this.typeProjectList[index] = state;
  }

  public deleteList(index: number){
    this.arrayList.splice(index, 1);
  }

  public createList(){
    for (let i = 0; i < this.arrayList.length; i++) {
      this.tankList[i].constructionType = this.typeProjectList[i];
      this.tankList[i].currentTankStatus = this.sourceStaffControl.value;
      this.tankList[i].tankVolume = this.sourceVolumeControl.value;
      this.tankList[i].currentTankStatus = this.sourceStateControl.value;
    }
  }
}
