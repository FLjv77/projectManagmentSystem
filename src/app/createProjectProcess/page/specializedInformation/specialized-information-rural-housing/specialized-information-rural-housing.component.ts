import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../shared/page/component/input-style/input-style.component";
import {UntypedFormControl} from "@angular/forms";
import {StateAndZoneIranModel} from "../../../model/stateAndZoneIranModel/stateAndZoneIranModel";
import {
  ProjectRemoveMarginalization,
  ProjectRuralHousing
} from "../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation";
import {IranStateAndZoneService} from "../../../service/iranStateAndZone/iran-state-and-zone.service";
import {DisplayPathModel} from "../../../../shared/model/displayPathModel";

@Component({
  selector: 'app-specialized-information-rural-housing',
  templateUrl: './specialized-information-rural-housing.component.html',
  styleUrls: ['./specialized-information-rural-housing.component.scss',
    '../../project-creation-levels/project-creation-levels.component.scss',
    '../specialized-information-removal-marginalization/specialized-information-removal-marginalization.component.scss'
  ]
})
export class SpecializedInformationRuralHousingComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public regionControl = new UntypedFormControl();
  public peopleParticipationControl = new UntypedFormControl();
  public projectNumberControl = new UntypedFormControl();
  public floorNumberControl = new UntypedFormControl();
  public projectAreaControl = new UntypedFormControl();
  public requirementControl = new UntypedFormControl();
  public equipmentControl = new UntypedFormControl();
  public requirementList: Array<string>;
  public equipmentList: Array<string>;
  public iranStateAndZoneList: Array<StateAndZoneIranModel>;
  private selectedState: StateAndZoneIranModel;
  public projectRuralHousing: ProjectRuralHousing;
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

  public setProjectRuralHousing(state: ProjectRuralHousing) {
    this.projectRuralHousing = state;
  }

  public checkShowSubmitButton(): boolean {
    return this.selectedState && this.selectedZone && this.projectNumberControl.value &&
      this.peopleParticipationControl.value && this.projectAreaControl.value && this.projectRuralHousing >=0 &&
      (this.equipmentControl.value || this.equipmentList) &&
      (this.requirementControl.value || this.requirementList);
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت پروژه', false, '');
    this.path2 = new DisplayPathModel('ساخت پروژه', false, '');
    this.path3 = new DisplayPathModel('شناسه تخصصی', false, '');
  }
}
