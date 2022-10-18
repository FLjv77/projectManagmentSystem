import { projectType } from './../../../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {InputCustomStyle} from "../../../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";
import { ConstructionTypestring, PumpStationWaterShedAndCanals } from 'src/app/createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';
import { arrayMax } from 'highcharts';

@Component({
  selector: 'app-water-information-pomp-type',
  templateUrl: './water-information-pomp-type.component.html',
  styleUrls: ['./water-information-pomp-type.component.scss','../../specialized-information-rural-water.component.scss']
})
export class WaterInformationPompTypeComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public pompStateControl = new Array<FormControl>();
  @Output() pumpStation = new EventEmitter<PumpStationWaterShedAndCanals[]>();
  public typeProject: ConstructionTypestring;
  public typeProjectList: Array<number> = [];
  public PumpStationWaterShedAndCanalsList: PumpStationWaterShedAndCanals[] = [];

  public lengthList: number;
  public lengthListDeleted: number;

  constructor() { }

  ngOnInit(): void {
    this.initInputStyle();
    this.PumpStationWaterShedAndCanalsList = new Array<PumpStationWaterShedAndCanals>;
    this.addList();
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

    this.pompStateControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

  }

  private checkValidationForm(i: number) {
    if(this.pompStateControl[i].value) {
      this.pumpStation.emit(this.PumpStationWaterShedAndCanalsList);
    } else {
      this.pumpStation.emit(this.PumpStationWaterShedAndCanalsList);
    }
  }

  public addList(){
    this.pompStateControl.push(new FormControl());
    this.PumpStationWaterShedAndCanalsList.push(new PumpStationWaterShedAndCanals());
    this.lengthList = this.PumpStationWaterShedAndCanalsList.length;
  }

  public setTypeProject(state: ConstructionTypestring,index: number){
    this.typeProject = state;
    this.PumpStationWaterShedAndCanalsList[index].constructionType = state;
    this.subscribeChangeFormCoontrol(index);
  }

  public setPompState(event: string, index: number) {
    this.PumpStationWaterShedAndCanalsList[index].pumpStationStatus = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public deleteList(index: number){
    this.PumpStationWaterShedAndCanalsList.splice(index, 1);
    this.lengthListDeleted = this.PumpStationWaterShedAndCanalsList.length;
    this.subscribeChangeFormCoontrol(index);
  }

  // public createList(){
  //   for (let i = 0; i < this.arrayList.length; i++) {
  //     this.pumpStation[i].pumpStationStatus = this.pompStateControl.value;
  //     this.pumpStation[i].constructionType = this.typeProjectList[i];
  //   }
  // }
}
