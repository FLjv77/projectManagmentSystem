import { url } from 'src/assets/url/url';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DisplayPathModel} from "../../../shared/model/displayPathModel";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../../../assets/style/base.scss']
})

export class HomeComponent implements OnInit {
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  constructor(private router: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.initDisplayPath();
    this.setRole();
  }

  public setRole(){
    let role = 'holdingAdmin'
    localStorage.removeItem(url.RoleHome);
    localStorage.setItem(url.RoleHome,role);
  }

  public goToCreateProject() {
    this.router.navigate(['../createProject/selectProjectType']);
  }
  public goToEditProject() {
    this.router.navigate(['../projectManagement/editProject']);
  }
  public goToProjectList() {
    this.router.navigate(['../projectManagement/projectList']);
  }
  public goToRequestCompany() {
    this.router.navigate(['../workspace/confirmRegisteredCompany']);
  }
  public goToCompanyList() {
    this.router.navigate(['../workspace/companyList']);
  }
  public goToCompanyCostReport() {
    this.router.navigate(['../managementReport/reportOnEfficiency']);
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('داشبورد', false, '');
    this.path2 = new DisplayPathModel('خانه', false, '');
  }
}
