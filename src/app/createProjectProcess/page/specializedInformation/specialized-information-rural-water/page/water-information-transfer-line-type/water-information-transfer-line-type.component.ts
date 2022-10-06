import { projectType } from './../../../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { Component, OnInit,EventEmitter, Output} from '@angular/core';
import {InputCustomStyle} from "../../../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";
import { ConstructionTypestring, TransferLineWaterShedAndCanals } from 'src/app/createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';
import { arrayMax } from 'highcharts';
import { number } from 'echarts';

@Component({
  selector: 'app-water-information-transfer-line-type',
  templateUrl: './water-information-transfer-line-type.component.html',
  styleUrls: ['./water-information-transfer-line-type.component.scss','../../specialized-information-rural-water.component.scss']
})
export class WaterInformationTransferLineTypeComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public transferLineControl = new Array<FormControl>();
  public pipeTypeControl = new Array<FormControl>();
  public pipeLenControl = new Array<FormControl>();
  public fromWhereControl = new Array<FormControl>();
  public toWhereControl = new Array<FormControl>();
  public typeProject: ConstructionTypestring;
  public TransferLineWaterShedAndCanalsList: TransferLineWaterShedAndCanals[] = [];
  @Output() transferLineList = new EventEmitter<TransferLineWaterShedAndCanals[]>();

  public lengthList: number;
  public lengthListDeleted: number;

  constructor() { }

  ngOnInit(): void {
    this.initInputStyle();
    this.TransferLineWaterShedAndCanalsList = new Array<TransferLineWaterShedAndCanals>;
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

    this.transferLineControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.pipeTypeControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.pipeLenControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.fromWhereControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.toWhereControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

  }

  private checkValidationForm(i : number) {
    if(
      this.transferLineControl[i].value &&
      this.pipeTypeControl[i].value &&
      this.pipeLenControl[i].value &&
      this.fromWhereControl[i].value &&
      this.toWhereControl[i].value
    ) {
      this.transferLineList.emit(this.TransferLineWaterShedAndCanalsList);
    } else {
      this.transferLineList.emit(this.TransferLineWaterShedAndCanalsList);
    }
  }
  public addList(){
    this.transferLineControl.push(new FormControl());
    this.pipeTypeControl.push(new FormControl());
    this.pipeLenControl.push(new FormControl());
    this.fromWhereControl.push(new FormControl());
    this.toWhereControl.push(new FormControl());
    this.TransferLineWaterShedAndCanalsList.push(new TransferLineWaterShedAndCanals());
    this.lengthList = this.TransferLineWaterShedAndCanalsList.length;
  }

  public setTypeProject(state: ConstructionTypestring,index: number){
    this.typeProject = state;
    this.TransferLineWaterShedAndCanalsList[index].constructionType = state;
    this.subscribeChangeFormCoontrol(index);
  }

  public setToWhere(event: string, index: number) {
    this.TransferLineWaterShedAndCanalsList[index].transferLineDestination = Number(event);
    this.subscribeChangeFormCoontrol(index);
  }

  public setFromWhere(event: string, index: number) {
    this.TransferLineWaterShedAndCanalsList[index].transferLineSource = Number(event);
    this.subscribeChangeFormCoontrol(index);
  }

  public setPipeLen(event: string, index: number) {
    this.TransferLineWaterShedAndCanalsList[index].transferLineLenght = Number(event);
    this.subscribeChangeFormCoontrol(index);
  }

  public setPipeType(event: string, index: number) {
    this.TransferLineWaterShedAndCanalsList[index].transferLineType = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public setTransferLine(event: string, index: number) {
    this.TransferLineWaterShedAndCanalsList[index].transferLineStatus = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public deleteList(index: number){
    this.TransferLineWaterShedAndCanalsList.splice(index, 1);
    this.lengthListDeleted = this.TransferLineWaterShedAndCanalsList.length;
    this.subscribeChangeFormCoontrol(index);
  }

  // public createList(){
  //   for (let i = 0; i < this.arrayList.length; i++) {
  //     this.transferLineList[i].constructionType = this.typeProjectList[i];
  //     this.transferLineList[i].transferLineStatus = this.transferLineControl.value;
  //     this.transferLineList[i].transferLineType = this.pipeTypeControl.value;
  //     this.transferLineList[i].transferLineLenght = this.pipeLenControl.value;
  //     this.transferLineList[i].transferLineSource = this.fromWhereControl.value;
  //     this.transferLineList[i].transferLineDestination = this.toWhereControl.value;
  //   }
  // }
}
