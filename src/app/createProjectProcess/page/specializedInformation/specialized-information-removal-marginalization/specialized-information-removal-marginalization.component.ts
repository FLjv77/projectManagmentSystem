import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {InputCustomStyle} from "../../../../shared/page/component/input-style/input-style.component";
import {IranStateAndZoneService} from "../../../service/iranStateAndZone/iran-state-and-zone.service";
import {StateAndZoneIranModel} from "../../../model/stateAndZoneIranModel/stateAndZoneIranModel";
import {ProjectRemoveMarginalization} from "../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation";

@Component({
  selector: 'app-specialized-information-removal-marginalization',
  templateUrl: './specialized-information-removal-marginalization.component.html',
  styleUrls: ['./specialized-information-removal-marginalization.component.scss',
    '../../project-creation-levels/project-creation-levels.component.scss']
})
export class SpecializedInformationRemovalMarginalizationComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public regionControl = new FormControl();
  public regionPopulationControl = new FormControl();
  public requirementControl = new FormControl();
  public equipmentControl = new FormControl();
  public requirementList: Array<string>;
  public equipmentList: Array<string>;
  public iranStateAndZoneList: Array<StateAndZoneIranModel>;
  private selectedState: StateAndZoneIranModel;
  public projectRemoveMarginalization: ProjectRemoveMarginalization;
  private selectedZone: string;

  constructor(private iranStateAndZoneService: IranStateAndZoneService) { }

  ngOnInit(): void {
    this.initInputStyle();
    this.iranStateAndZoneList = this.iranStateAndZoneService.getIranStateAndZoneList();
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

  public setProjectRuralWaterArea(state: ProjectRemoveMarginalization) {
    this.projectRemoveMarginalization = state;
  }

  public checkShowSubmitButton(): boolean {
    return this.selectedState && this.selectedZone && this.regionPopulationControl.value &&
      (this.equipmentControl.value || this.equipmentList) &&
      (this.requirementControl.value || this.requirementList);
  }
}
