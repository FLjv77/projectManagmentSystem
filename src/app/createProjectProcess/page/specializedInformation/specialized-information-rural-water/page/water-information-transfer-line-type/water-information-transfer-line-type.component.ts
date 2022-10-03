import { projectType } from './../../../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { Component, OnInit,EventEmitter, Output} from '@angular/core';
import {InputCustomStyle} from "../../../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";
import { TransferLineWaterShedAndCanals } from 'src/app/createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';

@Component({
  selector: 'app-water-information-transfer-line-type',
  templateUrl: './water-information-transfer-line-type.component.html',
  styleUrls: ['./water-information-transfer-line-type.component.scss','../../specialized-information-rural-water.component.scss']
})
export class WaterInformationTransferLineTypeComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public transferLineControl = new FormControl();
  public pipeTypeControl = new FormControl();
  public pipeLenControl = new FormControl();
  public fromWhereControl = new FormControl();
  public toWhereControl = new FormControl();
  public regionControl = new FormControl();
  public stabilityResourceControl = new FormControl();
  public debeyControl = new FormControl();
  public ownerShipTypeControl = new FormControl();
  public groundTypeControl = new FormControl();
  public number = new FormControl();
  public arrayList: Array<string> = ['2223'];
  public typeProject: projectType;
  public typeProjectList: Array<number> = [];
  public transferLineList: TransferLineWaterShedAndCanals[] = [];

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

  @Output() validationForm = new EventEmitter<boolean>();

  private subscribeChangeFormCoontrol() {
    this.transferLineControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.pipeTypeControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.pipeLenControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.fromWhereControl.valueChanges.subscribe(() => {
      this.checkValidationForm();
    });

    this.toWhereControl.valueChanges.subscribe(() => {
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
      this.transferLineControl.value &&
      this.pipeTypeControl.value &&
      this.pipeLenControl.value &&
      this.fromWhereControl.value &&
      this.toWhereControl.value &&
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
      this.transferLineList[i].constructionType = this.typeProjectList[i];
      this.transferLineList[i].transferLineStatus = this.transferLineControl.value;
      this.transferLineList[i].transferLineType = this.pipeTypeControl.value;
      this.transferLineList[i].transferLineLenght = this.pipeLenControl.value;
      this.transferLineList[i].transferLineSource = this.fromWhereControl.value;
      this.transferLineList[i].transferLineDestination = this.toWhereControl.value;
    }
  }
}
