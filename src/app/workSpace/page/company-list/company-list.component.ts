import { HttpErrorResponse } from '@angular/common/http';
import { HandleDisplayErrorService } from 'src/app/shared/service/handleError/handle-display-error.service';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { CompanySelectedDTO, CompanyStatusstring } from './../../model/companyModel';
import { CompanyListService } from './../../service/companyListDTO/company-list.service';
import { NumberFormaterService } from './../../../shared/service/number/number-formater.service';
import { HandleModalService } from '../../../shared/service/handleModalService/handle-modal.service';
import { Component, OnInit } from '@angular/core';
import {DisplayPathModel} from "../../../shared/model/displayPathModel";
import {Router} from "@angular/router";
import { CompanyType } from '../../model/comanyModel';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public showSpinner: boolean = false;
  public compans: CompanySelectedDTO[];

  constructor(private handleModalService : HandleModalService,
              private router: Router,
              private numberFormaterService:NumberFormaterService,
              private companyListService: CompanyListService,
              private handleDisplayErrorService:HandleDisplayErrorService) { }

  ngOnInit(): void {
    this.initDisplayPath();
    this.getCompanyList();
  }

  private getCompanyList() {
    this.compans = new Array<CompanySelectedDTO>;
    this.companyListService.CompanySelected(
      1, 100
    ).subscribe((res: ApiResult<CompanySelectedDTO[]>) => {
      if(res.isSuccess && res.statusCode == 200) {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].companyStatus == 1) {
            this.compans.push(res.data[i]);
          }
        }
        //this.compans = res.data;
      }
    });
  }

  public getCompanyType(type: CompanyType[]): string {
    let res = '';
    for(let i=0; i<type.length; i++) {
      switch(type[i]) {
        case CompanyType.health: res += 'سلامت'; break;
        case CompanyType.housing: res += 'مسکن'; break;
        case CompanyType.roadConstruction: res += 'راه سازی'; break;
        case CompanyType.waterSupply: res += 'آب رسانی'; break;
      }
    }

    return res;
  }


  public getCompanyState(type: CompanyStatusstring): string {
    let res = '';
    switch(type) {
      case CompanyStatusstring.checkedAndConfirmed: res = 'بررسی و تایید شده'; break;
      case CompanyStatusstring.checkedAndRejected: res = 'بررسی و عدم تایید'; break;
      case CompanyStatusstring.notChecked: res = 'بررسی نشده'; break;
    }

    return res;
  }

  public openMdalAddCompony(){
    this.handleModalService.openModal('add-company-modal');
  }
  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت شرکت', false, '');
    this.path2 = new DisplayPathModel('لیست شرکت', false, '');
  }

  public goToWorkSpaceProfile(item: CompanySelectedDTO) {
    this.router.navigate(['../../workspace/workSpaceProfile'] , {queryParams: {companyName: item.companyName,
      companyAreaExpertise: item.companyAreaExpertise,companyEconomicCode: item.companyEconomicCode,
      companyStatus: item.companyStatus, idCompany: item.companyId}});
  }

  public changeToPersian(num:string){
    return this.numberFormaterService.covertToFrNumber(num)
  }

  public goUserList() {
    this.router.navigate(['../../userManagement/userList']);
  }

  public goProjectList(id: string) {
    this.router.navigate(['../../projectManagement/projectList'], {queryParams: {idCompany: id}});
  }

  public editCompany() {
    this.handleModalService.openModal('company-profile-modal');
  }

  private chageSpinnerState(state: boolean) {
    this.showSpinner = state;
  }
}
