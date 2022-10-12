import { ApiResult } from 'src/app/auth/model/authDTO';
import { RoadTypestring } from './../../../model/specializedInformation/modifyRuralRoadSpeceficDetail';
import { ConstructionTypestring } from 'src/app/createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';
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
  public roadWidth = new Array<FormControl>();
  public roadLength = new Array<FormControl>();
  public LocationFormControl = new FormControl();
  public projectId: string|null;
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public path3: DisplayPathModel;
  public typeProject: projectType;
  public targetWayTypeList: Array<number> = [];
  public ruralRoadList :Array<RuralRoad>;
  private locations: Location[];
  private index: number;

  constructor(private router:Router, private activeRouting:ActivatedRoute,
              private specializedInformationService:SpecializedInformationService,
              private activeRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this.initInputStyle();
    this.initDisplayPath();
    this.ruralRoadList = new Array<RuralRoad>;
    this.addList();
    this.getLocation();
    this.getQuery();
  }

  private getQuery(){
    this.projectId = this.activeRoute.snapshot.queryParamMap.get("projectId");
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
    let res = true;
    for(let i=0; i<this.ruralRoadList.length; i++) {
      if(
        this.roadWidth[i].value &&
        this.roadLength[i].value) res = true;
        else {
          res = false; break;
        }
    }
    return res;
  }

  public setWayType1(state: RoadTypestring,index: number) {
    this.ruralRoadList[index].currentRoadType = state;
  }

  public setWayType2(state: RoadTypestring,index: number) {
    this.ruralRoadList[index].targetRoadType = state;
  }

  public setTypeProject(state: ConstructionTypestring, index: number) {
    this.ruralRoadList[index].constructionType = state;
  }

  public set_roadWidth(state: string, index: number) {
    this.ruralRoadList[index].roadWidth = Number(state);
  }

  public set_roadLength(state: string, index: number) {
    this.ruralRoadList[index].roadLength = Number(state);
    this.ruralRoadList[this.index].latitude = 0;
    this.ruralRoadList[this.index].roadLongitude = 0;
  }

  public addList() {
    this.roadWidth.push(new FormControl());
    this.roadLength.push(new FormControl());
    this.ruralRoadList.push(new RuralRoad());
  }

  public deleteList(index: number){
    this.ruralRoadList.splice(index, 1);
  }

  public goOnMap(i: number) {
    this.index = i;
    let projectType = this.activeRouting.snapshot.queryParamMap.get('type');
    let id = this.activeRouting.snapshot.queryParamMap.get('targetId');

    this.router.navigate(['../../createProject/startCreatProject'], {queryParams: {type: projectType, targetId: id}});

    this.router.navigate(['../../createProject/selectLocationOnMap'], {queryParams: {type: projectType, targetId: id}});
  }

  private getLocation() {
    let location = this.activeRouting.snapshot.queryParamMap.get('locations');
    let id = this.activeRouting.snapshot.queryParamMap.get('targetId');
    if (location !== null) {
      this.locations[this.index] = JSON.parse(location);
      //this.ruralRoadList[this.index].latitude = this.locations[0].x_pos;
      //this.ruralRoadList[this.index].roadLongitude = this.locations[0].y_pos;
    }

    this.router.navigate(['../../createProject/startCreatProject'], {queryParams: {type: projectType, targetId: id}});
  }

  public sendWayInfo(){
    this.specializedInformationService.ModifyRuralRoadSpeceficDetail(this.projectId, new RuralRoadSpeceficDetailDTO(this.ruralRoadList))
    .subscribe((res: ApiResult<RuralRoadSpeceficDetailDTO>)=>{
      console.log(res);
      
    });
  }
}
