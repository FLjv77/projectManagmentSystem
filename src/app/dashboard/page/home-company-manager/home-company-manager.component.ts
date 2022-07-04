import { Component, OnInit } from '@angular/core';
import {DisplayPathModel} from "../../../shared/model/displayPathModel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-company-manager',
  templateUrl: './home-company-manager.component.html',
  styleUrls: ['./home-company-manager.component.scss', '../home/home.component.scss', '../../../../assets/style/base.scss']
})
export class HomeCompanyManagerComponent implements OnInit {
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
