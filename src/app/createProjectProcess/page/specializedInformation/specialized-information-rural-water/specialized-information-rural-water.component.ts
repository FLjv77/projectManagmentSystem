import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";
import {StateAndZoneIranModel} from "../../../model/stateAndZoneIranModel/stateAndZoneIranModel";
import {IranStateAndZoneService} from "../../../service/iranStateAndZone/iran-state-and-zone.service";
import {GroundType, ProjectRuralWater} from "../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation";
import {DisplayPathModel} from "../../../../shared/model/displayPathModel";

@Component({
  selector: 'app-specialized-information-rural-water',
  templateUrl: './specialized-information-rural-water.component.html',
  styleUrls: ['./specialized-information-rural-water.component.scss',
    '../../project-creation-levels/project-creation-levels.component.scss',
  '../specialized-information-removal-marginalization/specialized-information-removal-marginalization.component.scss']
})

export class SpecializedInformationRuralWaterComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public regionControl = new FormControl();
  public requirementControl = new FormControl();
  public equipmentControl = new FormControl();



  public ableToUseControl = new FormControl();
  public stabilityResourceControl = new FormControl();
  public debeyControl = new FormControl();
  public ownerShipTypeControl = new FormControl();
  public groundTypeControl = new FormControl();


  public requirementList: Array<string>;
  public equipmentList: Array<string>;
  public iranStateAndZoneList: Array<StateAndZoneIranModel>;
  private selectedState: StateAndZoneIranModel;
  private projectRuralWaterArea: ProjectRuralWater;
  private groundType: GroundType;
  private selectedZone: string;
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public path3: DisplayPathModel;

  constructor(private iranStateAndZoneService: IranStateAndZoneService) { }

  ngOnInit(): void {
    this.initInputStyle();
    this.initDisplayPath();
    this.iranStateAndZoneList = this.iranStateAndZoneService.getIranStateAndZoneList();
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت پروژه', false, '');
    this.path2 = new DisplayPathModel('ساخت پروژه', false, '');
    this.path3 = new DisplayPathModel('شناسه تخصصی', false, '');
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public addRequirement() {
    if (!this.requirementList) this.requirementList = new Array<string>();
    this.requirementList.push(this.requirementControl.value);
    this.requirementControl.reset();
  }

  public addEquipmentList() {
    if (!this.equipmentList) this.equipmentList = new Array<string>();
    this.equipmentList.push(this.equipmentControl.value);
    this.equipmentControl.reset();
  }

  public removeRequirement(index: number) {
    this.requirementList.splice(index, 1);
  }
  public removeEquipmentList(index: number) {
    this.requirementList.splice(index, 1);
  }

  public checkShowAddButtonRequirement(): boolean {
    return (this.requirementControl.value != null) && (this.requirementControl.value != undefined);
  }

  public checkShowAddButtonEquipment(): boolean {
    return (this.equipmentControl.value != null) && (this.equipmentControl.value != undefined);
  }

  public getStateName(item: StateAndZoneIranModel): string {
    return item.stateName;
  }

  public setSelectedState(item: StateAndZoneIranModel) {
    this.selectedState = item;
  }

  public setSelectedZone(item: string) {
    this.selectedZone = item;
  }

  public getZoneOfSelectedState(): string[] {
    return this.selectedState ? this.selectedState.zoneList : [];
  }

  public setProjectRuralWaterArea(state: ProjectRuralWater) {
    this.projectRuralWaterArea = state;
  }

  public checkProjectType(state: ProjectRuralWater) {
    return state == this.projectRuralWaterArea;
  }

  public setProjectGroundType(state: GroundType) {
    this.groundType = state;
  }

  public checkShowSubmitButton(): boolean {
    return this.selectedState && this.selectedZone &&
      (this.equipmentControl.value || this.equipmentList) &&
      (this.requirementControl.value || this.requirementList) && this.projectRuralWaterArea >= 0 && this.groundType >= 0;
  }
}
