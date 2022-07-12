import { DisplayPathModel } from './../../../../shared/model/displayPathModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-activity',
  templateUrl: './information-activity.component.html',
  styleUrls: ['./information-activity.component.scss']
})
export class InformationActivityComponent implements OnInit {
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;

  constructor() { }

  ngOnInit(): void {
    this.initDisplayPath();
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت پروژه', false, '');
    this.path2 = new DisplayPathModel('مدیریت فعالیت ها', false, '');
  }
}
