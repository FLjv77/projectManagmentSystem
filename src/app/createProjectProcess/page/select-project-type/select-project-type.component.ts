import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DisplayPathModel} from "../../../shared/model/displayPathModel";

@Component({
  selector: 'app-select-project-type',
  templateUrl: './select-project-type.component.html',
  styleUrls: ['./select-project-type.component.scss']
})
export class SelectProjectTypeComponent implements OnInit {
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public path3: DisplayPathModel;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initDisplayPath();
  }

  public goToCreateProjectSteps() {
    this.router.navigate(['createProject/startCreatProject']);
  }


  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت پروژه', false, '');
    this.path2 = new DisplayPathModel('ساخت پروژه', false, '');
    this.path3 = new DisplayPathModel('انتخاب نوع پروژه', false, '');
  }
}
