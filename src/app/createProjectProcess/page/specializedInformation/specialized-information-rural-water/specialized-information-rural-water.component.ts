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


  // public requirementList: Array<string>;
  // public equipmentList: Array<string>;
  public iranStateAndZoneList: Array<StateAndZoneIranModel>;
  private selectedState: StateAndZoneIranModel;
  private projectRuralWaterArea: ProjectRuralWater;
  private groundType: GroundType;
  private selectedZone: string;
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public path3: DisplayPathModel;
  public checkSubOption: boolean;
  public select0: boolean = false;
  public select1: boolean = false;
  public select2: boolean = false;
  public select3: boolean = false;
  public select4: boolean = false;
  public select5: boolean = false;
  public select6: boolean = false;
  public select7: boolean = false;
  public select8: boolean = false;

  public inputSelect0: boolean = false;
  public inputSelect1: boolean = false;
  public inputSelect2: boolean = false;
  public inputSelect3: boolean = false;
  public inputSelect4: boolean = false;
  public inputSelect5: boolean = false;
  public inputSelect6: boolean = false;
  public inputSelect7: boolean = false;
  public inputSelect8: boolean = false;

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

  // public addRequirement() {
  //   if (!this.requirementList) this.requirementList = new Array<string>();
  //   this.requirementList.push(this.requirementControl.value);
  //   this.requirementControl.reset();
  // }

  // public addEquipmentList() {
  //   if (!this.equipmentList) this.equipmentList = new Array<string>();
  //   this.equipmentList.push(this.equipmentControl.value);
  //   this.equipmentControl.reset();
  // }

  // public removeRequirement(index: number) {
  //   this.requirementList.splice(index, 1);
  // }
  // public removeEquipmentList(index: number) {
  //   this.requirementList.splice(index, 1);
  // }

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
    if (state==0) {
      this.select0 = !this.select0;
    }
    else if (state==1) {
      this.select1 = !this.select1;
    }
    else if (state==2) {
      this.select2 = !this.select2;
    }
    else if (state==3) {
      this.select3 = !this.select3;
    }
    else if (state==4) {
      this.select4 = !this.select4;
    }
    else if (state==5) {
      this.select5 = !this.select5;
    }
    else if (state==6) {
      this.select6 = !this.select6;
    }
    else if (state==7) {
      this.select7 = !this.select7;
    }
    else if (state==8) {
      this.select8 = !this.select8;
    }
  }

  public checkProjectType(state: ProjectRuralWater) {
    return state == this.projectRuralWaterArea;
  }

  public setProjectGroundType(state: GroundType) {
    this.groundType = state;
  }

  // public checkShowSubmitButton(): boolean {
  //   return this.selectedState && this.selectedZone &&
  //     (this.equipmentControl.value || this.equipmentList) &&
  //     (this.requirementControl.value || this.requirementList) && this.projectRuralWaterArea >= 0 && this.groundType >= 0;
  // }

  public handleSubOption(num:number,state: boolean) {
    if (num==0) {
      this.inputSelect0 = state;
    }
    else if (num==1) {
      this.inputSelect1 = state;
    }
    else if (num==2) {
      this.inputSelect2 = state;
    }
    else if (num==3) {
      this.inputSelect3 = state;
    }
    else if (num==4) {
      this.inputSelect4 = state;
    }
    else if (num==5) {
      this.inputSelect5 = state;
    }
    else if (num==6) {
      this.inputSelect6 = state;
    }
    else if (num==7) {
      this.inputSelect7 = state;
    }
    else if (num==8) {
      this.inputSelect8 = state;
    }
  }
  public checkValidation(): boolean {
    let res = false;
    if( this.select0 == true){
      if (this.inputSelect0 == true) {
        res = true
      }
      else{res = false;}
    }
    else if( this.select1 == true){
      if (this.inputSelect1 == true) {
        res = true;
      }
      else{res = false;}
    }
    else if( this.select2 == true){
      if (this.inputSelect2 == true) {
        res = true;
      }
      else{res = false;}
    }
    else if( this.select3 == true){
      if (this.inputSelect3 == true) {
        res = true;
      }
      else{res = false;}
    }
    else if( this.select4 == true){
      if (this.inputSelect4 == true) {
        res = true;
      }
      else{res = false;}
    }
    else if( this.select5 == true){
      if (this.inputSelect5 == true) {
        res = true;
      }
      else{res = false;}
    }
    else if( this.select6 == true){
      if (this.inputSelect6 == true) {
        res = true;
      }
      else{res = false;}
    }
    else if( this.select7 == true){
      if (this.inputSelect7 == true) {
        res = true;
      }
      else{res = false;}
    }
    else if( this.select8 == true){
      if (this.inputSelect8 == true) {
        res = true;
      }
      else{res = false;}
    }
    return res;
  }
}
