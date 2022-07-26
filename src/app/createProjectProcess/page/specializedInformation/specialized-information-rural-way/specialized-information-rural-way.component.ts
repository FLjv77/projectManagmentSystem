import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";
import {StateAndZoneIranModel} from "../../../model/stateAndZoneIranModel/stateAndZoneIranModel";
import {
  GroundType,
  ProjectRuralWay,
  WayType
} from "../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation";
import {IranStateAndZoneService} from "../../../service/iranStateAndZone/iran-state-and-zone.service";
import {DisplayPathModel} from "../../../../shared/model/displayPathModel";

@Component({
  selector: 'app-specialized-information-rural-way',
  templateUrl: './specialized-information-rural-way.component.html',
  styleUrls: ['./specialized-information-rural-way.component.scss',
    '../../project-creation-levels/project-creation-levels.component.scss',
    '../specialized-information-removal-marginalization/specialized-information-removal-marginalization.component.scss',
    '../../project-creation-levels/page/basic-project-information/basic-project-information.component.scss'
  ]
})
export class SpecializedInformationRuralWayComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public roadWidth = new FormControl();
  public roadLength = new FormControl();
  public LocationFormControl = new FormControl();

  public wayType: WayType;
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public path3: DisplayPathModel;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.initInputStyle();
    this.initDisplayPath();
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

  public goOnMap() {
    this.router.navigate(['../../createProject/selectLocationOnMap']);
  }

  public setWayType(state: WayType) {
    this.wayType = state;
  }

}
