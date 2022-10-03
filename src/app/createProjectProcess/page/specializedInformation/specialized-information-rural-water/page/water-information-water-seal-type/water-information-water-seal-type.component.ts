import { projectType } from './../../../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {InputCustomStyle} from "../../../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";
import { DikeWaterShedAndCanals } from 'src/app/createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';

@Component({
  selector: 'app-water-information-water-seal-type',
  templateUrl: './water-information-water-seal-type.component.html',
  styleUrls: ['./water-information-water-seal-type.component.scss','../../specialized-information-rural-water.component.scss']
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
  public regionControl = new FormControl();
  public stabilityResourceControl = new FormControl();
  public debeyControl = new FormControl();
  public ownerShipTypeControl = new FormControl();
  public groundTypeControl = new FormControl();
  public number = new FormControl();
  public arrayList: Array<string> = ['2223'];
  public typeProject: projectType;
  public typeProjectList: Array<number> = [];
  public dikeList: DikeWaterShedAndCanals[] = [];

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
      this.riverNameControl.value &&
      this.resourceSaveWaterStateControl.value &&
      this.stopFloodControl.value &&
      this.pompControl.value &&
      this.riverWidthControl.value &&
      this.lenControl.value &&
      this.heightControl.value &&
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
      this.dikeList[i].constructionType = this.typeProjectList[i];
      this.dikeList[i].riverName = this.riverNameControl.value;
      this.dikeList[i].riverWidth = this.riverWidthControl.value;
      this.dikeList[i].waterProviderResourceStatus = this.resourceSaveWaterStateControl.value;
      this.dikeList[i].pumping = this.pompControl.value;
      this.dikeList[i].dam = this.stopFloodControl.value;
      this.dikeList[i].dikeMaterialType = this.stuffWaterSealControl.value;
      this.dikeList[i].width = this.widthControl.value;
      this.dikeList[i].height = this.heightControl.value;
      this.dikeList[i].length = this.lenControl.value;
    }
  }
  
}
