import { projectType } from './../../../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {InputCustomStyle} from "../../../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";
import { PitWaterShedAndCanals } from 'src/app/createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';

@Component({
  selector: 'app-water-information-well-type',
  templateUrl: './water-information-well-type.component.html',
  styleUrls: ['./water-information-well-type.component.scss','../../specialized-information-rural-water.component.scss']
})
export class WaterInformationWellTypeComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public amountOfSurfaceControl = new FormControl();
  public widthWellControl = new FormControl();
  public lenPipeControl = new FormControl();
  public lenColControl = new FormControl();
  public regionControl = new FormControl();
  public stabilityResourceControl = new FormControl();
  public debeyControl = new FormControl();
  public ownerShipTypeControl = new FormControl();
  public groundTypeControl = new FormControl();
  public number = new FormControl();
  public typeProject: projectType;
  @Output() validationForm = new EventEmitter<boolean>();
  public arrayList: Array<string> = ['2223'];
  public typeProjectList: Array<number> = [];
  public pitList: PitWaterShedAndCanals[] = [];

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
      this.amountOfSurfaceControl.value &&
      this.widthWellControl.value &&
      this.lenPipeControl.value &&
      this.lenColControl.value &&
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
      this.pitList[i].constructionType = this.typeProjectList[i];
      this.pitList[i].coveredLandArea = this.amountOfSurfaceControl.value;
      this.pitList[i].pitDiameter = this.widthWellControl.value;
      this.pitList[i].tubeLenght = this.lenPipeControl.value;
      this.pitList[i].coolLenght = this.lenColControl.value;
    }
  }
}
