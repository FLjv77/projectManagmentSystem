import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";
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
  public regionControl = new FormControl();
  public peopleParticipationControl = new FormControl();
  public projectNumberControl = new FormControl();
  public floorNumberControl = new FormControl();
  public projectAreaControl = new FormControl();
  public requirementControl = new FormControl();
  public equipmentControl = new FormControl();
  public ApplicantsPaymentAmount = new FormControl();
  public amountFacilities = new FormControl();
  public numberOfFloors = new FormControl();
  public meterageInfrastructure = new FormControl();
  public meterageLand = new FormControl();
  public projectDeliveryDateFormControl = new FormControl();
  public beneficiariesListNameFormControl = new FormControl();
  public beneficiaries = new FormControl();
  public branches = new FormControl();
  public amountCost = new FormControl();
  public goodName = new FormControl();
  public LocationFormControl = new FormControl();
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public path3: DisplayPathModel;
  public beneficiariesList: Array<string> = [];
  public good: boolean = false;


  constructor(private router:Router) { }

  ngOnInit(): void {
    this.initInputStyle();
    this.initDisplayPath();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت پروژه', false, '');
    this.path2 = new DisplayPathModel('ساخت پروژه', false, '');
    this.path3 = new DisplayPathModel('شناسه تخصصی', false, '');
  }
  public add(list: Array<string>, name:string){
    if (!this.beneficiariesList && name != null) this.beneficiariesList = new Array<string>();
    list.push(name);
    this.beneficiaries.reset();
  }

  public remove(list : Array<string>, index: number){
    list.splice(index, 1);
  }

  public setGood() {
    this.good = !this.good;
  }

  public checkValidation(): boolean {
    let res = false;
    if(
      this.meterageLand.value &&
      this.meterageInfrastructure.value &&
      this.numberOfFloors.value &&

      this.amountFacilities.value &&
      this.ApplicantsPaymentAmount.value &&
      this.branches.value &&
      this.beneficiaries.value &&
      ((this.good && this.goodName.value && this.amountCost.value) || (!this.good))

    ) res = true;
    return res;
  }
}
