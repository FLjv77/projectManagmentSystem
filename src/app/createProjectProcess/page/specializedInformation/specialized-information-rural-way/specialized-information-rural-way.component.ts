import { projectType } from './../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";
import {WayType} from "../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation";
import {DisplayPathModel} from "../../../../shared/model/displayPathModel";
import { SpecializedInformationService } from 'src/app/createProjectProcess/service/specializedInformation/specialized-information.service';
import { RuralRoad, RuralRoadSpeceficDetailDTO } from 'src/app/createProjectProcess/model/specializedInformation/modifyRuralRoadSpeceficDetail';
import { Location } from '../../project-creation-levels/page/pproject-location-information/map-container/map-container.component';

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
  public projectId: string;
  // public number = new FormControl();

  public wayType: WayType;
  public targetWayType: WayType;
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public path3: DisplayPathModel;
  public typeProject: projectType;
  public arrayList: Array<string> = ['2223'];
  public ruralRoadSpeceficDetail : RuralRoadSpeceficDetailDTO;
  public typeProjectList: Array<number> = [];
  public WayTypeList: Array<number> = [];
  public targetWayTypeList: Array<number> = [];
  public ruralRoadList :Array<RuralRoad> =[];
  private locations: Location[];

  constructor(private router:Router, private activeRouting:ActivatedRoute,
              private specializedInformationService:SpecializedInformationService) { }

  ngOnInit(): void {
    this.initInputStyle();
    this.initDisplayPath();
    this.getLocation();
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

  public checkValidation(): boolean {
    let res = false;
    if(
      this.roadWidth.value &&
      this.roadLength.value 
      //&& this.number.value
    ) res = true;
    return res;
  }

  public setWayType(num:number,state: WayType,index: number) {
    if (num==1) {
      this.wayType = state;
      this.WayTypeList[index] = state;
    }
    else if(num==2){
      this.targetWayType = state;
      this.targetWayTypeList[index] = state;
    }
    
  }

  public setTypeProject(state: projectType,index: number){
    this.typeProject = state;
    this.typeProjectList[index] = state;
  }

  public addList(){
    this.arrayList.push('222');
  }

  public deleteList(index: number){
    this.arrayList.splice(index, 1);
  }

  public goOnMap() {
    let projectType = this.activeRouting.snapshot.queryParamMap.get('type');
    let id = this.activeRouting.snapshot.queryParamMap.get('targetId');

    this.router.navigate(['../../createProject/startCreatProject'], {queryParams: {type: projectType, targetId: id}});

    this.router.navigate(['../../createProject/selectLocationOnMap'], {queryParams: {type: projectType, targetId: id}});
  }

  private getLocation() {
    let location = this.activeRouting.snapshot.queryParamMap.get('locations');
    let id = this.activeRouting.snapshot.queryParamMap.get('targetId');
    if (location !== null) this.locations = JSON.parse(location);

    this.router.navigate(['../../createProject/startCreatProject'], {queryParams: {type: projectType, targetId: id}});
  }

  public sendWayInfo(){
    for (let i = 0; i < this.arrayList.length; i++) {
      this.ruralRoadList[i].constructionType = this.typeProjectList[i];
      this.ruralRoadList[i].currentRoadType = this.WayTypeList[i];
      this.ruralRoadList[i].targetRoadType = this.targetWayTypeList[i];
      this.ruralRoadList[i].roadLength = this.roadLength.value;
      this.ruralRoadList[i].roadWidth = this.roadWidth.value;
      this.ruralRoadList[i].roadLongitude = this.locations[0].x_pos;
      this.ruralRoadList[i].latitude = this.locations[0].y_pos;
      console.log(this.ruralRoadList)
    }
    this.specializedInformationService.ModifyRuralRoadSpeceficDetail(this.projectId,this.ruralRoadSpeceficDetail);
  }
}
