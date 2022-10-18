import { projectType } from './../../../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {InputCustomStyle} from "../../../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";
import { ConstructionTypestring, DamWaterShedAndCanals } from 'src/app/createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';
import { stat } from 'fs';

@Component({
  selector: 'app-water-information-dam-type',
  templateUrl: './water-information-dam-type.component.html',
  styleUrls: ['./water-information-dam-type.component.scss','../../specialized-information-rural-water.component.scss']
})
export class WaterInformationDamTypeComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public damStateControl = new Array<FormControl>();
  public capacityWaterControl = new Array<FormControl>();
  public riverNameControl = new Array<FormControl>();
  public staffControl = new Array<FormControl>();
  public volumeDamControl = new Array<FormControl>();
  public description = new Array<FormControl>();
  public typeProject: ConstructionTypestring;
  public typeProjectList : Array<number> = [];
  public damWaterShedAndCanalsList : DamWaterShedAndCanals[];

  public lengthList: number;
  public lengthListDeleted: number;

  @Output() damList = new EventEmitter<DamWaterShedAndCanals[]>();

  constructor() { }

  ngOnInit(): void {
    this.initInputStyle();
    this.damWaterShedAndCanalsList = new Array<DamWaterShedAndCanals>;
    this.addList();
    //this.subscribeChangeFormCoontrol();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  private subscribeChangeFormCoontrol(i: number) {
    if (this.typeProject == 0 || this.typeProject == 1 || this.typeProject == 2
      || this.lengthList != this.lengthListDeleted) {
      this.checkValidationForm(i);
    }

    this.damStateControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.capacityWaterControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.riverNameControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.staffControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.volumeDamControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.description[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

  }

  private checkValidationForm(i: number) {
    if(this.damStateControl[i].value &&this.capacityWaterControl[i].value &&this.riverNameControl[i].value &&
      this.staffControl[i].value &&this.volumeDamControl[i].value && this.description[i].value
    ) {
      this.damList.emit(this.damWaterShedAndCanalsList);
    } else {
      this.damList.emit(this.damWaterShedAndCanalsList);
    }
  }

  public addList() {
    this.description.push(new FormControl());
    this.volumeDamControl.push(new FormControl());
    this.staffControl.push(new FormControl());
    this.riverNameControl.push(new FormControl());
    this.capacityWaterControl.push(new FormControl());
    this.damStateControl.push(new FormControl());
    this.damWaterShedAndCanalsList.push(new DamWaterShedAndCanals());
    this.lengthList = this.damWaterShedAndCanalsList.length;
  }
  
  public setTypeProject(state: ConstructionTypestring,index: number){
    this.typeProject = state;
    this.damWaterShedAndCanalsList[index].constructionType = state;
    this.subscribeChangeFormCoontrol(index);
  }

  public deleteList(index: number){
    this.damWaterShedAndCanalsList.splice(index, 1);
    this.lengthListDeleted = this.damWaterShedAndCanalsList.length;
    this.subscribeChangeFormCoontrol(index);
  }

  public setCapacityWater(event: string, index: number) {
    this.damWaterShedAndCanalsList[index].wateringCapacity = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public setDescription(event: string, index: number) {
    this.damWaterShedAndCanalsList[index].damDescription = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public setStaff(event: string, index: number) {
    this.damWaterShedAndCanalsList[index].damMaterialType = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public setVolumeDam(event: string, index: number) {
    this.damWaterShedAndCanalsList[index].damTankVolume = Number(event);
    this.subscribeChangeFormCoontrol(index);
  }

  public setRiverName(event: string, index: number) {
    this.damWaterShedAndCanalsList[index].riverName = event;
    this.subscribeChangeFormCoontrol(index);
  }


}
