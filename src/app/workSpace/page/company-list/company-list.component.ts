import { HttpErrorResponse } from '@angular/common/http';
import { HandleDisplayErrorService } from 'src/app/shared/service/handleError/handle-display-error.service';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { CompanySelectedDTO } from './../../model/companyModel';
import { CompanyListService } from './../../service/companyListDTO/company-list.service';
import { NumberFormaterService } from './../../../shared/service/number/number-formater.service';
import { HandleModalService } from '../../../shared/service/handleModalService/handle-modal.service';
import { Component, OnInit } from '@angular/core';
import {DisplayPathModel} from "../../../shared/model/displayPathModel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public showSpinner: boolean = false;

  constructor(private handleModalService : HandleModalService,
              private router: Router,
              private numberFormaterService:NumberFormaterService,
              private companyListService: CompanyListService,
              private handleDisplayErrorService:HandleDisplayErrorService) { }

  ngOnInit(): void {
    this.initDisplayPath();
  }

  public openMdalAddCompony(){
    this.handleModalService.openModal('add-company-modal');
  }
  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت شرکت', false, '');
    this.path2 = new DisplayPathModel('لیست شرکت', false, '');
  }

  public goToWorkSpaceProfile() {
    this.router.navigate(['../../workspace/workSpaceProfile']);
  }

  public changeToPersian(num:string){
    return this.numberFormaterService.covertToFrNumber(num)
  }

  public goUserList() {
    this.router.navigate(['../../userManagement/userList']);
  }

  public goProjectList() {
    this.router.navigate(['../../projectManagement/projectList']);
  }

  public editCompany() {
    this.handleModalService.openModal('company-profile-modal');
  }

  private chageSpinnerState(state: boolean) {
    this.showSpinner = state;
  }
}
