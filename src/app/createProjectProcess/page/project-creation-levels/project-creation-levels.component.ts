import { Component, OnInit } from '@angular/core';
import {DisplayPathModel} from "../../../shared/model/displayPathModel";
import {ActivatedRoute} from "@angular/router";
import {ProjectType} from "../../model/EnumForSpecializeInformation/EnumForSpecializeInformation";

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
    this.path1 = new DisplayPathModel('مدیریت پروژه', false, '');
    this.path2 = new DisplayPathModel('ساخت پروژه', false, '');
    this.path3 = new DisplayPathModel('اطلاعات پروژه', false, '');
  }

}
