import { projectType } from './../../../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {InputCustomStyle} from "../../../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";
import { ConstructionTypestring, DistributionNetworkWaterShedAndCanals } from 'src/app/createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';

@Component({
  selector: 'app-water-information-distribution-network-type',
  templateUrl: './water-information-distribution-network-type.component.html',
  styleUrls: ['./water-information-distribution-network-type.component.scss','../../specialized-information-rural-water.component.scss']
})
export class WaterInformationDistributionNetworkTypeComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public networkStateControl = new Array<FormControl>();
  public pompControl = new Array<FormControl>();
  public lenPipeControl = new Array<FormControl>();
  public typePipeControl = new Array<FormControl>();
  public description = new Array<FormControl>();
  @Output() networkWaterShedList = new EventEmitter<DistributionNetworkWaterShedAndCanals[]>();
  public typeProject: ConstructionTypestring;
  public distributionNetwork: DistributionNetworkWaterShedAndCanals[] = [];
  public lengthList: number;
  public lengthListDeleted: number;

  constructor() { }

  ngOnInit(): void {
    this.initInputStyle();
    this.distributionNetwork = new Array<DistributionNetworkWaterShedAndCanals>;
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

    this.networkStateControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.pompControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.lenPipeControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.typePipeControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.description[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });
  }

  private checkValidationForm(i: number) {
    if(
      this.networkStateControl[i].value &&
      this.pompControl[i].value &&
      this.lenPipeControl[i].value &&
      this.typePipeControl[i].value &&
      this.description[i].value
    ) {
      this.networkWaterShedList.emit(this.distributionNetwork);
    } else {
      this.networkWaterShedList.emit(this.distributionNetwork);
    }
  }

  public addList(){
    this.description.push(new FormControl());
    this.networkStateControl.push(new FormControl());
    this.pompControl.push(new FormControl());
    this.lenPipeControl.push(new FormControl());
    this.typePipeControl.push(new FormControl());
    this.distributionNetwork.push(new DistributionNetworkWaterShedAndCanals());
    this.lengthList = this.distributionNetwork.length;
  }

  public setTypeProject(state: ConstructionTypestring ,index: number){
    this.typeProject = state;
    this.distributionNetwork[index].constructionType = state;
    this.subscribeChangeFormCoontrol(index);
  }

  public deleteList(index: number){
    this.distributionNetwork.splice(index, 1);
    this.lengthListDeleted = this.distributionNetwork.length;
    this.subscribeChangeFormCoontrol(index);
  }

  public setLenPipe(event: string, index: number) {
    this.distributionNetwork[index].transferLineLength = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public setTypePipe(event: string, index: number) {
    this.distributionNetwork[index].typeOfPipe = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public setPomp(event: string, index: number) {
    this.distributionNetwork[index].boosterPumpOnline = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public setNetworkState(event: string, index: number) {
    this.distributionNetwork[index].distributionNetworkStatus = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public setDescription(event: string, index: number) {
    this.distributionNetwork[index].description = event;
    this.subscribeChangeFormCoontrol(index);
  }

  // public createList(){
  //   for (let i = 0; i < this.arrayList.length; i++) {
  //     this.distributionNetwork[i].description = this.description.value;
  //     this.distributionNetwork[i].constructionType = this.typeProjectList[i];
  //     this.distributionNetwork[i].boosterPumpOnline = this.pompControl.value;
  //     this.distributionNetwork[i].distributionNetworkStatus = this.networkStateControl.value;
  //     this.distributionNetwork[i].transferLineLength = this.lenPipeControl.value;
  //     this.distributionNetwork[i].typeOfPipe = this.typePipeControl.value;
  //   }
  // }
}
