import { NumberFormaterService } from './../../../shared/service/number/number-formater.service';
import { HandleModalService } from './../../../shared/service/handleModalService/handle-modal.service';
import { Router } from '@angular/router';
import { DisplayPathModel } from './../../../shared/model/displayPathModel';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../../service/authConnectToApi/auth.service';
import { ApiResult } from '../../model/authDTO';
import { CompanySelectedDTO } from 'src/app/workSpace/model/companyModel';
import { HandleDisplayErrorService } from 'src/app/shared/service/handleError/handle-display-error.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CompanyType } from '../../model/companyUserDTO';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, AfterViewInit {

  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public companyInformation: CompanySelectedDTO;

  constructor(private router: Router,
              private handleModalService:HandleModalService,
              private authService: AuthService,
              private handleDisplayErrorService: HandleDisplayErrorService,
              private numberFormaterService:NumberFormaterService) { }

  ngAfterViewInit(): void {
    this.getCompanyInformation();
  }

  ngOnInit(): void {
    this.initDisplayPath();
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('تنظیمات', false, '');
    this.path2 = new DisplayPathModel('پروفایل', false, '');
  }

  public goToWorkSpaceProfile() {
    this.router.navigate(['../../workspace/workSpaceProfile']);
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

  public changeToPersian(num:string){
    return this.numberFormaterService.covertToFrNumber(num)
  }


  private getCompanyInformation(){
    this.authService.getMyCompany().subscribe((res: ApiResult<CompanySelectedDTO>) => {
      if(res.isSuccess && res.statusCode == 200) {
        console.log(res);
        this.companyInformation = res.data;

      } else {
        this.handleDisplayErrorService.showError(res.statusCode);
      }
    }, (err: HttpErrorResponse) => {
      this.handleDisplayErrorService.showError(err.error.StatusCode);
    });;
  }


  public checkCompanyType(type: CompanyType): boolean {
    return this.companyInformation.companyAreaExpertise.indexOf(type) > -1;
  }

}
