import { ProjectSelectedDTO } from 'src/app/projectManagement/model/project/projectDto';
import { SpecializedInformationService } from 'src/app/createProjectProcess/service/specializedInformation/specialized-information.service';
import { IranStateAndZoneService } from './../../../../../../createProjectProcess/service/iranStateAndZone/iran-state-and-zone.service';
import { RefineryWaterShedAndCanals, PitWaterShedAndCanals, WaterShedAndCanalsSpeceficDetailBehaviorDTO } from './../../../../../../createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';
import { DamWaterShedAndCanals, DistributionNetworkWaterShedAndCanals, FountainWaterShedAndCanals, PumpStationWaterShedAndCanals, TankWaterShedAndCanals, TransferLineWaterShedAndCanals, DikeWaterShedAndCanals } from 'src/app/createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';
import { ProjectRuralWater, GroundType } from './../../../../../../createProjectProcess/model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { StateAndZoneIranModel } from './../../../../../../createProjectProcess/model/stateAndZoneIranModel/stateAndZoneIranModel';
import { FormControl } from '@angular/forms';
import { InputCustomStyle } from 'src/app/shared/page/component/input-style/input-style.component';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-rural-water',
  templateUrl: './rural-water.component.html',
  styleUrls: ['./rural-water.component.scss']
})
export class RuralWaterComponent implements OnInit {

  @Input() data: ProjectSelectedDTO;
  public inputCustomStyle: InputCustomStyle;
  public regionControl = new FormControl();
  public requirementControl = new FormControl();
  public equipmentControl = new FormControl();

  public ableToUseControl = new FormControl();
  public stabilityResourceControl = new FormControl();
  public debeyControl = new FormControl();
  public ownerShipTypeControl = new FormControl();
  public groundTypeControl = new FormControl();

  public iranStateAndZoneList: Array<StateAndZoneIranModel>;
  private selectedState: StateAndZoneIranModel;
  private projectRuralWaterArea: ProjectRuralWater;
  public checkSubOption: boolean;

  public damList: DamWaterShedAndCanals[] = [];
  public networkWater: DistributionNetworkWaterShedAndCanals[] = [];
  public FountainList: FountainWaterShedAndCanals[] = [];
  public PumpStationList: PumpStationWaterShedAndCanals[] = [];
  public RefineryList: RefineryWaterShedAndCanals[] = [];
  public TankList: TankWaterShedAndCanals[] = [];
  public TransferLineList: TransferLineWaterShedAndCanals[] = [];
  public DikeList: DikeWaterShedAndCanals[] = [];
  public PitWaterList: PitWaterShedAndCanals[] = [];
  private projectId: string|null;
  private groundType: GroundType;

  constructor(private iranStateAndZoneService: IranStateAndZoneService,
    private specializedInformationService:SpecializedInformationService) { }

  ngOnInit(): void {
    this.initInputStyle();
    this.iranStateAndZoneList = this.iranStateAndZoneService.getIranStateAndZoneList();
    this.getData();
  }

  public getData(){
    if (this.data) {
      console.log(this.data);
      
      this.debeyControl.setValue(this.data.projectSpeceficDetail.currentDebye);
      this.ableToUseControl.setValue(this.data.projectSpeceficDetail.consumability);
      this.groundTypeControl.setValue(this.data.projectSpeceficDetail.typeOfLand);
      this.ableToUseControl.setValue(this.data.projectSpeceficDetail.treatments);
      this.ableToUseControl.setValue(this.data.projectSpeceficDetail.equipment);
      this.ownerShipTypeControl.setValue(this.data.projectSpeceficDetail.ownerShipType);
      this.ableToUseControl.setValue(this.data.projectSpeceficDetail.requirements);

      this.damList = this.data.projectSpeceficDetail.dam;
      this.networkWater = this.data.projectSpeceficDetail.distributionNetwork;
      this.FountainList = this.data.projectSpeceficDetail.fountain;
      this.PumpStationList = this.data.projectSpeceficDetail.pumpStation;
      this.RefineryList = this.data.projectSpeceficDetail.refinery;
      this.TankList = this.data.projectSpeceficDetail.tank;
      this.TransferLineList = this.data.projectSpeceficDetail.transferLine;
      this.DikeList = this.data.projectSpeceficDetail.dike;
      this.PitWaterList = this.data.projectSpeceficDetail.pit;
      this.setValueInputs();
    }
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public setValueInputs(){

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

  public getZoneOfSelectedState(): string[] {
    return this.selectedState ? this.selectedState.zoneList : [];
  }

  public checkProjectType(state: ProjectRuralWater) {
    return state == this.projectRuralWaterArea;
  }

  public setProjectGroundType(state: GroundType) {
    this.groundType = state;
  }

  public setDamList(list: DamWaterShedAndCanals[]){
    this.damList = list;
  }

  public setNetworkWaterShedList(list: DistributionNetworkWaterShedAndCanals[]){
    this.networkWater = list;
  }

  public setFountainList(list: FountainWaterShedAndCanals[]){
    this.FountainList = list;
  }

  public setPumpStation(list: PumpStationWaterShedAndCanals[]){
    this.PumpStationList = list;
  }

  public setRefinery(list: RefineryWaterShedAndCanals[]){
    this.RefineryList = list;
  }

  public setTank(list: TankWaterShedAndCanals[]){
    this.TankList = list;
  }

  public setTransferLine(list: TransferLineWaterShedAndCanals[]){
    this.TransferLineList = list;
  }

  public setDikeList(list: DikeWaterShedAndCanals[]){
    this.DikeList = list;
  }

  public setPit(list: PitWaterShedAndCanals[]){
    this.PitWaterList = list;
  }

  public editInfo(){
    let list = new WaterShedAndCanalsSpeceficDetailBehaviorDTO;
    list.currentDebye = this.debeyControl.value;
    list.consumability = this.regionControl.value;
    list.resourceStability = this.stabilityResourceControl.value;
    list.typeOfLand = this.groundTypeControl.value;
    list.ownerShipType = this.ownerShipTypeControl.value;
    list.dam = this.damList;
    list.dike = this.DikeList;
    list.distributionNetwork = this.networkWater;
    list.equipment = this.equipmentControl.value;
    list.fountain = this.FountainList;
    list.pit = this.PitWaterList;
    list.pumpStation = this.PumpStationList;
    list.refinery = this.RefineryList;
    list.requirements = this.requirementControl.value;
    this.specializedInformationService.ModifyWaterShedAndCanalsSpeceficDetail(this.projectId,list);
  }
}
