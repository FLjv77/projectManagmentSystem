import { projectType } from './../../../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {InputCustomStyle} from "../../../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";
import { DistributionNetworkWaterShedAndCanals } from 'src/app/createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';

@Component({
  selector: 'app-water-information-distribution-network-type',
  templateUrl: './water-information-distribution-network-type.component.html',
  styleUrls: ['./water-information-distribution-network-type.component.scss','../../specialized-information-rural-water.component.scss']
})
export class WaterInformationDistributionNetworkTypeComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public networkStateControl = new FormControl();
  public pompControl = new FormControl();
  public lenPipeControl = new FormControl();
  public typePipeControl = new FormControl();
  public regionControl = new FormControl();
  public stabilityResourceControl = new FormControl();
  public debeyControl = new FormControl();
  public ownerShipTypeControl = new FormControl();
  public groundTypeControl = new FormControl();
  public number = new FormControl();
  public description = new FormControl();
  @Output() validationForm = new EventEmitter<boolean>();
  public arrayList: Array<string> = ['2223'];
  public typeProject: projectType;
  public distributionNetwork: DistributionNetworkWaterShedAndCanals[] = [];
  public typeProjectList: Array<number>;

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
    this.networkStateControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.pompControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.lenPipeControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.typePipeControl.valueChanges.subscribe(() => {
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
      this.networkStateControl.value &&
      this.pompControl.value &&
      this.lenPipeControl.value &&
      this.typePipeControl.value &&
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
      this.distributionNetwork[i].description = this.description.value;
      this.distributionNetwork[i].constructionType = this.typeProjectList[i];
      this.distributionNetwork[i].boosterPumpOnline = this.pompControl.value;
      this.distributionNetwork[i].distributionNetworkStatus = this.networkStateControl.value;
      this.distributionNetwork[i].transferLineLength = this.lenPipeControl.value;
      this.distributionNetwork[i].typeOfPipe = this.typePipeControl.value;
    }
  }
}
