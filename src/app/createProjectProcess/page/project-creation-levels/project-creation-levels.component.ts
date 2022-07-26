import { Component, OnInit } from '@angular/core';
import {DisplayPathModel} from "../../../shared/model/displayPathModel";

@Component({
  selector: 'app-project-creation-levels',
  templateUrl: './project-creation-levels.component.html',
  styleUrls: ['./project-creation-levels.component.scss']
})
export class ProjectCreationLevelsComponent implements OnInit {

  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public path3: DisplayPathModel;
  public selectSteps: number = 8;

  constructor() { }
  ngOnInit(): void {
    this.initDisplayPath();
  }

  public setSelectStep(idStep:number){
    this.selectSteps = idStep;
  }


  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت پروژه', false, '');
    this.path2 = new DisplayPathModel('ساخت پروژه', false, '');
    this.path3 = new DisplayPathModel('اطلاعات پروژه', false, '');
  }

}
