import { ApiResult } from 'src/app/auth/model/authDTO';
import { CompanySelectedDTO } from './../../../workSpace/model/companyModel';
import { CompanyListService } from './../../../workSpace/service/companyListDTO/company-list.service';
import { url } from './../../../../assets/url/url';
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
  public companyListNoRegistered : number;
  public companyListRegistered : number;
  constructor(private router: Router,private companyList: CompanyListService) { }

  ngOnInit(): void {
    this.initDisplayPath();
    this.checkIsLogin();
    this.setRole();
    this.CompanySelected();
  }

  public CompanySelected(){
    this.companyList.CompanySelected(1,5).subscribe((res: ApiResult<CompanySelectedDTO[]>)=>{
      let list = new Array<CompanySelectedDTO>;
      let list1 = new Array<CompanySelectedDTO>;
    this.companyList.CompanySelected(
      1, 100
    ).subscribe((res: ApiResult<CompanySelectedDTO[]>) => {
      console.log(res.data);
      if(res.isSuccess && res.statusCode == 200) {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].companyStatus == 0) {
            list.push(res.data[i]);
          }
          else if (res.data[i].companyStatus == 1) {
            list1.push(res.data[i]);
          }

        }
      }
        this.companyListNoRegistered = list.length;
        this.companyListRegistered = list1.length;
    });
    })
  }

  private checkIsLogin() {
    let token = localStorage.getItem(url.tokenName);
    if(!token) {
      this.router.navigate(['../auth/loginUser'])
    }
  }

  public setRole(){
    let role = 'holdingAdmin';
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
