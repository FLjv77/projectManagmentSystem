import { ConstructionTypestring } from './../../../../../model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';
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
  @Output() Dike = new EventEmitter<DikeWaterShedAndCanals[]>();
  public inputCustomStyle: InputCustomStyle;
  public riverNameControl = new Array<FormControl>();
  public resourceSaveWaterStateControl = new Array<FormControl>();
  public pompControl = new Array<FormControl>();
  public stopFloodControl = new Array<FormControl>();
  public riverWidthControl = new Array<FormControl>();
  public stuffWaterSealControl = new Array<FormControl>();
  public widthControl = new Array<FormControl>();
  public lenControl = new Array<FormControl>();
  public heightControl = new Array<FormControl>();
  public typeProject: ConstructionTypestring;
  public DikeWaterShedAndCanalsList: DikeWaterShedAndCanals[] = [];

  public lengthList: number;
  public lengthListDeleted: number;

  constructor() { }

  ngOnInit(): void {
    this.initInputStyle();
    this.DikeWaterShedAndCanalsList = new Array<DikeWaterShedAndCanals>;
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

    this.riverNameControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.resourceSaveWaterStateControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.pompControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.stopFloodControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.riverWidthControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.lenControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.heightControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });
  }

  private checkValidationForm(i: number) {
    if(
      this.riverNameControl[i].value &&
      this.resourceSaveWaterStateControl[i].value &&
      this.stopFloodControl[i].value &&
      this.pompControl[i].value &&
      this.riverWidthControl[i].value &&
      this.lenControl[i].value &&
      this.heightControl[i].value
    ) {
      this.Dike.emit(this.DikeWaterShedAndCanalsList);
    } else {
      this.Dike.emit(this.DikeWaterShedAndCanalsList);
    }
  }

  public addList(){
    this.riverNameControl.push(new FormControl());
    this.resourceSaveWaterStateControl.push(new FormControl());
    this.stopFloodControl.push(new FormControl());
    this.pompControl.push(new FormControl());
    this.riverWidthControl.push(new FormControl());
    this.lenControl.push(new FormControl());
    this.heightControl.push(new FormControl());
    this.DikeWaterShedAndCanalsList.push(new DikeWaterShedAndCanals());
    this.lengthList = this.DikeWaterShedAndCanalsList.length;
  }

  public setTypeProject(state: ConstructionTypestring,index: number){
    this.typeProject = state;
    this.DikeWaterShedAndCanalsList[index].constructionType = state;
    this.subscribeChangeFormCoontrol(index);
  }

  public setHeight(event: string, index: number) {
    this.DikeWaterShedAndCanalsList[index].height = Number(event);
    this.subscribeChangeFormCoontrol(index);
  }

  public setWidth(event: string, index: number) {
    this.DikeWaterShedAndCanalsList[index].width = Number(event);
    this.subscribeChangeFormCoontrol(index);
  }
  public setStuffWaterSeal(event: string, index: number) {
    this.DikeWaterShedAndCanalsList[index].dikeMaterialType = Number(event);
    this.subscribeChangeFormCoontrol(index);
  }
  public setRiverWidth(event: string, index: number) {
    this.DikeWaterShedAndCanalsList[index].riverWidth = Number(event);
    this.subscribeChangeFormCoontrol(index);
  }
  public setStopFlood(event: string, index: number) {
    this.DikeWaterShedAndCanalsList[index].dam = event;
    this.subscribeChangeFormCoontrol(index);
  }
  public setPomp(event: string, index: number) {
    this.DikeWaterShedAndCanalsList[index].pumping = Number(event);
    this.subscribeChangeFormCoontrol(index);
  }

  public setResourceSaveWaterState(event: string, index: number) {
    this.DikeWaterShedAndCanalsList[index].waterProviderResourceStatus = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public setRiverName(event: string, index: number) {
    this.DikeWaterShedAndCanalsList[index].riverName = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public setLen(event: string, index: number) {
    this.DikeWaterShedAndCanalsList[index].length = Number(event);
    this.subscribeChangeFormCoontrol(index);
  }
  public deleteList(index: number){
    this.DikeWaterShedAndCanalsList.splice(index, 1);
    this.lengthListDeleted = this.DikeWaterShedAndCanalsList.length;
    this.subscribeChangeFormCoontrol(index);
  }

  // public createList(){
  //   for (let i = 0; i < this.arrayList.length; i++) {
  //     this.dikeList[i].constructionType = this.typeProjectList[i];
  //     this.dikeList[i].riverName = this.riverNameControl.value;
  //     this.dikeList[i].riverWidth = this.riverWidthControl.value;
  //     this.dikeList[i].waterProviderResourceStatus = this.resourceSaveWaterStateControl.value;
  //     this.dikeList[i].pumping = this.pompControl.value;
  //     this.dikeList[i].dam = this.stopFloodControl.value;
  //     this.dikeList[i].dikeMaterialType = this.stuffWaterSealControl.value;
  //     this.dikeList[i].width = this.widthControl.value;
  //     this.dikeList[i].height = this.heightControl.value;
  //     this.dikeList[i].length = this.lenControl.value;
  //   }
  // }
  
}
