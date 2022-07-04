import { Component, OnInit } from '@angular/core';
import {DisplayPathModel} from "../../../shared/model/displayPathModel";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss', '../../../../assets/style/base.scss']
})
export class ProjectListComponent implements OnInit {
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  constructor() { }

  ngOnInit(): void {
    this.initDisplayPath();
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت پروژه', false, '');
    this.path2 = new DisplayPathModel('لیست پروژه ها', false, '');
  }
}
