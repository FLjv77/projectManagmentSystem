import { projectType } from './../../../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import {InputCustomStyle} from "../../../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";
import { ConstructionTypestring, FountainWaterShedAndCanals } from 'src/app/createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';

@Component({
  selector: 'app-water-information-fountain-type',
  templateUrl: './water-information-fountain-type.component.html',
  styleUrls: ['./water-information-fountain-type.component.scss','../../specialized-information-rural-water.component.scss']
})
export class WaterInformationFountainTypeComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public description = new Array<FormControl>();
  @Output() fountainList = new EventEmitter<FountainWaterShedAndCanals[]>();
  public typeProject: ConstructionTypestring;
  public typeProjectList: Array<number> =[];
  public FountainWaterShedAndCanalsList: FountainWaterShedAndCanals[];

  public lengthList: number;
  public lengthListDeleted: number;

  constructor() { }

  ngOnInit(): void {
    this.initInputStyle();
    this.FountainWaterShedAndCanalsList = new Array<FountainWaterShedAndCanals>;
    this.addList();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  private subscribeChangeFormCoontrol(i:number) {
    if (this.typeProject == 0 || this.typeProject == 1 || this.typeProject == 2 
      || this.lengthList != this.lengthListDeleted) {
      this.checkValidationForm(i);
    }

    this.description[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });
  }

  private checkValidationForm(i: number) {
    if(this.description[i].value) {
      this.fountainList.emit(this.FountainWaterShedAndCanalsList);
    } else {
      this.fountainList.emit(this.FountainWaterShedAndCanalsList);
    }
  }

  public addList(){
    this.description.push(new FormControl());
    this.FountainWaterShedAndCanalsList.push(new FountainWaterShedAndCanals());
    this.lengthList = this.FountainWaterShedAndCanalsList.length;
  }

  public setTypeProject(state: ConstructionTypestring,index: number){
    this.typeProject = state;
    this.FountainWaterShedAndCanalsList[index].constructionType = state;
    this.subscribeChangeFormCoontrol(index);
  }

  public setDescription(event: string, index: number) {
    this.FountainWaterShedAndCanalsList[index].description = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public deleteList(index: number){
    this.FountainWaterShedAndCanalsList.splice(index, 1);
    this.lengthListDeleted = this.FountainWaterShedAndCanalsList.length;
    this.subscribeChangeFormCoontrol(index);
  }

  // public createList(){
  //   for (let i = 0; i < this.arrayList.length; i++) {
  //     this.fountain[i].description = this.description.value;
  //     this.fountain[i].constructionType = this.typeProjectList[i];
  //   }
  // }
}
