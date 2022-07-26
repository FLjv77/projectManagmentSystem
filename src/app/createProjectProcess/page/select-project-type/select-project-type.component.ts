import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DisplayPathModel} from "../../../shared/model/displayPathModel";
import {ProjectType} from "../../model/EnumForSpecializeInformation/EnumForSpecializeInformation";

@Component({
  selector: 'app-select-project-type',
  templateUrl: './select-project-type.component.html',
  styleUrls: ['./select-project-type.component.scss']
})
export class SelectProjectTypeComponent implements OnInit {
  private projectType: ProjectType;
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public path3: DisplayPathModel;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initDisplayPath();
  }

  public goToCreateProjectSteps(type: ProjectType) {
    this.projectType = type;
    this.router.navigate(['createProject/startCreatProject'], {queryParams: {type: this.projectType}});
  }


  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت پروژه', false, '');
    this.path2 = new DisplayPathModel('ساخت پروژه', false, '');
    this.path3 = new DisplayPathModel('انتخاب نوع پروژه', false, '');
  }
}
