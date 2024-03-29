import { projectType } from './../../../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {InputCustomStyle} from "../../../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";
import { ConstructionTypestring, TankWaterShedAndCanals } from 'src/app/createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';

@Component({
  selector: 'app-water-information-source-type',
  templateUrl: './water-information-source-type.component.html',
  styleUrls: ['./water-information-source-type.component.scss','../../specialized-information-rural-water.component.scss']
})
export class WaterInformationSourceTypeComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public sourceStateControl = new Array<FormControl>();
  public sourceStaffControl = new Array<FormControl>();
  public sourceVolumeControl = new Array<FormControl>();
  @Output() Tank = new EventEmitter<TankWaterShedAndCanals[]>();
  public typeProject: ConstructionTypestring;
  public TankWaterShedAndCanalsList: TankWaterShedAndCanals[] = [];

  public lengthList: number;
  public lengthListDeleted: number;

  constructor() { }

  ngOnInit(): void {
    this.initInputStyle();
    this.TankWaterShedAndCanalsList = new Array<TankWaterShedAndCanals>;
    this.addList();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  private subscribeChangeFormCoontrol(i :number) {
    if (this.typeProject == 0 || this.typeProject == 1 || this.typeProject == 2 
      || this.lengthList != this.lengthListDeleted) {
      this.checkValidationForm(i);
    }

    this.sourceStateControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.sourceStaffControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.sourceVolumeControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });
  }

  private checkValidationForm(i: number) {
    if(
      this.sourceStateControl[i].value &&
      this.sourceStaffControl[i].value &&
      this.sourceVolumeControl[i].value
    ) {
      this.Tank.emit(this.TankWaterShedAndCanalsList);
    } else {
      this.Tank.emit(this.TankWaterShedAndCanalsList);
    }
  }

  public addList(){
    this.sourceStateControl.push(new FormControl());
    this.sourceStaffControl.push(new FormControl());
    this.sourceVolumeControl.push(new FormControl());
    this.TankWaterShedAndCanalsList.push(new TankWaterShedAndCanals());
    this.lengthList = this.TankWaterShedAndCanalsList.length;
  }

  public setTypeProject(state: ConstructionTypestring,index: number){
    this.typeProject = state;
    this.TankWaterShedAndCanalsList[index].constructionType = state;
    this.subscribeChangeFormCoontrol(index);
  }

  public setSourceVolume(event: string, index: number) {
    this.TankWaterShedAndCanalsList[index].tankVolume = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public setSourceStaff(event: string, index: number) {
    this.TankWaterShedAndCanalsList[index].tankMaterialType = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public setSourceState(event: string, index: number) {
    this.TankWaterShedAndCanalsList[index].currentTankStatus = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public deleteList(index: number){
    this.TankWaterShedAndCanalsList.splice(index, 1);
    this.lengthListDeleted = this.TankWaterShedAndCanalsList.length;
    this.subscribeChangeFormCoontrol(index);
  }

  // public createList(){
  //   for (let i = 0; i < this.arrayList.length; i++) {
  //     this.tankList[i].constructionType = this.typeProjectList[i];
  //     this.tankList[i].currentTankStatus = this.sourceStaffControl.value;
  //     this.tankList[i].tankVolume = this.sourceVolumeControl.value;
  //     this.tankList[i].currentTankStatus = this.sourceStateControl.value;
  //   }
  // }
}
