import { Component, OnInit } from '@angular/core';
import {DisplayPathModel} from "../../../shared/model/displayPathModel";

@Component({
  selector: 'app-edit-project-information',
  templateUrl: './edit-project-information.component.html',
  styleUrls: ['./edit-project-information.component.scss', '../../../../assets/style/base.scss']
})
export class EditProjectInformationComponent implements OnInit {
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  constructor() { }

  ngOnInit(): void {
    this.initDisplayPath();
  }
  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت پروژه', false, '');
    this.path2 = new DisplayPathModel('ویرایش پروژه', false, '');
  }
}
