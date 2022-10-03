import { projectType } from './../../../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {InputCustomStyle} from "../../../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";
import { SpecializedInformationService } from 'src/app/createProjectProcess/service/specializedInformation/specialized-information.service';
import { DamWaterShedAndCanals } from 'src/app/createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';

@Component({
  selector: 'app-water-information-dam-type',
  templateUrl: './water-information-dam-type.component.html',
  styleUrls: ['./water-information-dam-type.component.scss','../../specialized-information-rural-water.component.scss']
})
export class WaterInformationDamTypeComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public damStateControl = new FormControl();
  public capacityWaterControl = new FormControl();
  public riverNameControl = new FormControl();
  public staffControl = new FormControl();
  public volumeDamControl = new FormControl();
  public regionControl = new FormControl();
  public stabilityResourceControl = new FormControl();
  public debeyControl = new FormControl();
  public ownerShipTypeControl = new FormControl();
  public groundTypeControl = new FormControl();
  public number = new FormControl();
  public description = new FormControl();
  public arrayList: Array<string> = ['2223'];
  public typeProject: projectType;
  public typeProjectList : Array<number> = [];
  public damWaterShedAndCanalsList : DamWaterShedAndCanals[] = [];

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
    if(this.damStateControl.value &&this.capacityWaterControl.value &&this.riverNameControl.value &&
      this.staffControl.value &&this.volumeDamControl.value &&this.regionControl.value && 
      this.stabilityResourceControl.value &&this.debeyControl.value &&this.ownerShipTypeControl.value &&
      this.groundTypeControl.value &&this.number.value
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
      this.damWaterShedAndCanalsList[i].damDescription = this.description.value;
      this.damWaterShedAndCanalsList[i].constructionType = this.typeProjectList[i];
      this.damWaterShedAndCanalsList[i].damMaterialType = this.staffControl.value;
      this.damWaterShedAndCanalsList[i].riverName = this.riverNameControl.value;
      this.damWaterShedAndCanalsList[i].wateringCapacity = this.capacityWaterControl.value;
      this.damWaterShedAndCanalsList[i].damTankVolume = this.volumeDamControl.value;
    }
  }
}
