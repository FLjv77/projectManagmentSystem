import { AdvancedSearchConnecctToApiService } from './../../../../advancedSearch/service/advancedSearchConnecctToApi/advanced-search-connecct-to-api.service';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { ProjectSelectedDTO } from 'src/app/projectManagement/model/project/projectDto';
import { ProjectConnectToApiService } from 'src/app/projectManagement/service/project/projectConnectToApi/project-connect-to-api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import {InputCustomStyle} from "../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";
import {StateAndZoneIranModel} from "../../../../createProjectProcess/model/stateAndZoneIranModel/stateAndZoneIranModel";
import {ProjectRemoveMarginalization} from "../../../../createProjectProcess/model/EnumForSpecializeInformation/EnumForSpecializeInformation";
import {DisplayPathModel} from "../../../../shared/model/displayPathModel";
import {IranStateAndZoneService} from "../../../../createProjectProcess/service/iranStateAndZone/iran-state-and-zone.service";

@Component({
  selector: 'app-edite-detail-information',
  templateUrl: './edite-detail-information.component.html',
  styleUrls: ['./edite-detail-information.component.scss',  '../../../../createProjectProcess/page/project-creation-levels/project-creation-levels.component.scss']
})
export class EditeDetailInformationComponent implements OnInit ,AfterViewInit{
  
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
  public projectIdSelect: string|string[];
  public select: string;
  @Input() projectId: string | string[];
  public data: ProjectSelectedDTO;
  public edit: boolean=false;

  constructor(private iranStateAndZoneService: IranStateAndZoneService,
              private activeRoute: ActivatedRoute,
              private projectConnectToApiService :ProjectConnectToApiService,
              private advancedSearchConnecctToApiService:AdvancedSearchConnecctToApiService) { }

  ngOnInit(): void {
    this.initInputStyle();
    this.iranStateAndZoneList = this.iranStateAndZoneService.getIranStateAndZoneList();
    //this.getQuryParam();
    this.getInfo();
  }

  ngAfterViewInit(): void {
    this.advancedSearchConnecctToApiService.projectIdSelected.subscribe((res: string | string[])=>{
      this.projectIdSelect = res;
      if (this.projectIdSelect) {
      this.projectConnectToApiService.getProjectGeneralPropertiesSelect(this.projectIdSelect)
        .subscribe((res: ApiResult<ProjectSelectedDTO>)=>{
          this.select = res.data.objectiveTitle;
          this.data = res.data;
      });
      }
    })
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

  public getInfo(){
    if (this.projectId) {
      this.projectConnectToApiService.getProjectGeneralPropertiesSelect(this.projectId)
      .subscribe((res: ApiResult<ProjectSelectedDTO>)=>{
        this.select = res.data.objectiveTitle;
        this.data = res.data;
    });
    }
  }

  public setRefresh(event:boolean){
    if (event==true) {
      this.getInfo();
    }
  }

}
