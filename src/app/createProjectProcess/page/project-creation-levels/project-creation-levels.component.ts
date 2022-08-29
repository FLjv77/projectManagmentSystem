import { OutputInfo } from '../../model/createProjectModel/createProject';
import { Component, OnInit } from '@angular/core';
import {DisplayPathModel} from "../../../shared/model/displayPathModel";
import {ActivatedRoute} from "@angular/router";
import {ProjectType} from "../../model/EnumForSpecializeInformation/EnumForSpecializeInformation";
import { aarayStyle } from './page/basic-project-information/basic-project-information.component';

@Component({
  selector: 'app-project-creation-levels',
  templateUrl: './project-creation-levels.component.html',
  styleUrls: ['./project-creation-levels.component.scss']
})
export class ProjectCreationLevelsComponent implements OnInit {
  private projectType: ProjectType | string;
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public path3: DisplayPathModel;
  public selectSteps: number = 8;
  public objective : string;
  public bottleneck : string;
  public challenge : string;
  public projectName : string;
  public projectDeliveryDate : string;
  public descreption : string;
  public parentId : string;
  public contributors : string;
  public infrastructureCost : number;
  public humanResourceCost : number;

  constructor(
    private activeRouting: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initDisplayPath();
    this.getQueryParam();
  }

  private getQueryParam() {
    let type = this.activeRouting.snapshot.queryParamMap.get('type');
    if (type !== null) this.projectType = type;
  }

  public setSelectStep(idStep: number){
    this.selectSteps = idStep;
  }

  public checkWhichSpecializedComponent(type: ProjectType): boolean {
    return type == this.projectType;
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('ساخت پروژه', true, 'createProject/selectProjectType');
    this.path2 = new DisplayPathModel('اطلاعات پروژه', false, '');
  }

  public setObjectivFild($event: OutputInfo){
    this.objective = $event.inputs[0];
    this.bottleneck = $event.inputs[1];
    this.challenge = $event.inputs[2];
    this.setSelectStep($event.state);
  }

  public setBasicFild($event : aarayStyle){
    this.projectName = $event.info.inputs[0];
    this.projectDeliveryDate = $event.info.inputs[1];
    this.descreption = $event.info.inputs[2];
    this.infrastructureCost = $event.infrastructureCost;
    this.humanResourceCost = $event.humanResourceCost;
    this.contributors = $event.info.inputs[3];
    this.parentId = $event.info.inputs[4];
    this.setSelectStep($event.info.state);
    console.log($event);
  }

}
