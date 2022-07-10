import { Component, OnInit } from '@angular/core';
import {DisplayPathModel} from "../../../shared/model/displayPathModel";

@Component({
  selector: 'app-advanced-search-container',
  templateUrl: './advanced-search-container.component.html',
  styleUrls: ['./advanced-search-container.component.scss', '../../../../assets/style/base.scss']
})
export class AdvancedSearchContainerComponent implements OnInit {
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;

  constructor() { }

  ngOnInit(): void {
    this.initDisplayPath();
  }


  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت پروژه', false, '');
    this.path2 = new DisplayPathModel('جستجو پیشرفته', false, '');
  }
}
