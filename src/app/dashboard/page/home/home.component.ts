import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DisplayPathModel} from "../../../shared/model/displayPathModel";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../../../assets/style/base.scss']
})

export class HomeComponent implements OnInit {
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initDisplayPath();
  }

  public goToCreateProject() {
    this.router.navigate(['../createProject/selectProjectType']);
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('داشبورد', false, '');
    this.path2 = new DisplayPathModel('خانه', false, '');
  }
}
