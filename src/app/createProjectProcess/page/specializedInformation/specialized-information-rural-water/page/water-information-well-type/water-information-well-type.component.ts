import { ConstructionTypestring, PitWaterShedAndCanals } from './../../../../../model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {InputCustomStyle} from "../../../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-water-information-well-type',
  templateUrl: './water-information-well-type.component.html',
  styleUrls: ['./water-information-well-type.component.scss','../../specialized-information-rural-water.component.scss']
})
export class WaterInformationWellTypeComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public amountOfSurfaceControl = new Array<FormControl>();
  public widthWellControl = new Array<FormControl>();
  public lenPipeControl = new Array<FormControl>();
  public lenColControl = new Array<FormControl>();
  public typeProject: ConstructionTypestring;
  @Output() Pit = new EventEmitter<PitWaterShedAndCanals[]>();
  public PitWaterShedAndCanalsList: PitWaterShedAndCanals[] = [];

  public lengthList: number;
  public lengthListDeleted: number;

  constructor() { }

  ngOnInit(): void {
    this.initInputStyle();
    this.PitWaterShedAndCanalsList = new Array<PitWaterShedAndCanals>;
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

    this.amountOfSurfaceControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.widthWellControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.lenPipeControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.lenColControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });
  }

  private checkValidationForm(i:number) {
    if(
      this.amountOfSurfaceControl[i].value &&
      this.widthWellControl[i].value &&
      this.lenPipeControl[i].value &&
      this.lenColControl[i].value
    ) {
      this.Pit.emit(this.PitWaterShedAndCanalsList);
    } else {
      this.Pit.emit(this.PitWaterShedAndCanalsList);
    }
  }

  public addList(){
    this.amountOfSurfaceControl.push(new FormControl());
    this.widthWellControl.push(new FormControl());
    this.lenColControl.push(new FormControl());
    this.lenPipeControl.push(new FormControl());
    this.PitWaterShedAndCanalsList.push(new PitWaterShedAndCanals());
    this.lengthList = this.PitWaterShedAndCanalsList.length;
  }

  public setTypeProject(state: ConstructionTypestring,index: number){
    this.typeProject = state;
    this.PitWaterShedAndCanalsList[index].constructionType = state;
    this.subscribeChangeFormCoontrol(index);
  }

  public setAmountOfSurface(event: string, index: number) {
    this.PitWaterShedAndCanalsList[index].coveredLandArea = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public setLenPipe(event: string, index: number) {
    this.PitWaterShedAndCanalsList[index].tubeLenght = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public setPiLenCol(event: string, index: number) {
    this.PitWaterShedAndCanalsList[index].coolLenght = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public setWidthWell(event: string, index: number) {
    this.PitWaterShedAndCanalsList[index].pitDiameter = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public deleteList(index: number){
    this.PitWaterShedAndCanalsList.splice(index, 1);
    this.lengthListDeleted = this.PitWaterShedAndCanalsList.length;
    this.subscribeChangeFormCoontrol(index);
  }

  // public createList(){
  //   for (let i = 0; i < this.arrayList.length; i++) {
  //     this.pitList[i].constructionType = this.typeProjectList[i];
  //     this.pitList[i].coveredLandArea = this.amountOfSurfaceControl.value;
  //     this.pitList[i].pitDiameter = this.widthWellControl.value;
  //     this.pitList[i].tubeLenght = this.lenPipeControl.value;
  //     this.pitList[i].coolLenght = this.lenColControl.value;
  //   }
  // }
}
