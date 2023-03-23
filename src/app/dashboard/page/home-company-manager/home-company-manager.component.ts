import { url } from './../../../../assets/url/url';
import { AlertDialogBySweetAlertService } from 'src/app/shared/service/alertDialog/alert-dialog-by-sweet-alert.service';
import { CompanySelectedDTO } from 'src/app/workSpace/model/companyModel';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { CompanyListService } from 'src/app/workSpace/service/companyListDTO/company-list.service';
import { Component, OnInit } from '@angular/core';
import {DisplayPathModel} from "../../../shared/model/displayPathModel";
import {Router} from "@angular/router";
import { HttpErrorResponse } from '@angular/common/http';
import { SidebarControleServiceService } from 'src/app/shared/service/sidebarControleService/sidebar-controle-service.service';

@Component({
  selector: 'app-home-company-manager',
  templateUrl: './home-company-manager.component.html',
  styleUrls: ['./home-company-manager.component.scss', '../home/home.component.scss', '../../../../assets/style/base.scss']
})
export class HomeCompanyManagerComponent implements OnInit {
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  constructor(private router: Router,
    private companyListService:CompanyListService,
    private sidebarControleServiceService: SidebarControleServiceService,
    private alertDialogBySweetAlertService:AlertDialogBySweetAlertService) { }

  ngOnInit(): void {
    this.initDisplayPath();
    this.setRole();
  }

  public setRole(){
    let role = 'companyAdmin';
    localStorage.removeItem(url.RoleHome);
    localStorage.setItem(url.RoleHome,role);
  }

  public goToCreateProject() {
    this.router.navigate(['../createProject/selectProjectType']);
  }
  public goToEditProject() {
    this.companyListService.CompanySelected(1, 50
    ).subscribe((res: ApiResult<CompanySelectedDTO[]>) => {
      if(res){
        if (res.statusCode==200 && res.isSuccess==true) {
          this.router.navigate(['../projectManagement/editProject']);
        }
        else if(res.statusCode == 403){
          this.alertDialogBySweetAlertService.showErrorAlert('شما دسترسی لازم برای این بخش را ندارید.');
          this.sidebarControleServiceService.logOut();
        }
      }
    }, (err: HttpErrorResponse) => {
      this.sidebarControleServiceService.logOut();
    });
  }
  public goToProjectList() {
    this.router.navigate(['../projectManagement/projectList']);
  }
  public goToGallery() {
    this.router.navigate(['../../gallery']);
  }
  public goToSearch() {
    this.router.navigate(['../../advancedSearch']);
  }
  private initDisplayPath() {
    this.path1 = new DisplayPathModel('داشبورد', false, '');
    this.path2 = new DisplayPathModel('خانه', false, '');
  }

}
