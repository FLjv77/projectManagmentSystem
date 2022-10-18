import { NumberFormaterService } from './../../../shared/service/number/number-formater.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DisplayPathModel} from "../../../shared/model/displayPathModel";
import { ProjectConnectToApiService } from 'src/app/projectManagement/service/project/projectConnectToApi/project-connect-to-api.service';
import { GetProjectsGeneralInfoOfCompanyDto, ProjectSelectedDTO, ProjectSortedBy } from 'src/app/projectManagement/model/project/projectDto';
import { ApiResult } from 'src/app/auth/model/authDTO';

@Component({
  selector: 'app-view-workspace',
  templateUrl: './view-workspace.component.html',
  styleUrls: ['./view-workspace.component.scss']
})
export class ViewWorkspaceComponent implements OnInit {
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public projectStateDisplay: ProjectState = 0;
  public companyName: string;
  public companyEconomicCode: string;
  public companyAreaExpertise: string;
  public companyStatus: string;
  public idCompany: string;
  public ProjectSortedBy:ProjectSortedBy = 0;
  public list : ProjectSelectedDTO[] = [];

  constructor(private router: Router,
              private numberFormaterService:NumberFormaterService,
              private activeRouting: ActivatedRoute,
              private projectConnectToApiService:ProjectConnectToApiService) { }

  ngOnInit() {
    this.initDisplayPath();
    this.getQueryParam();
    this.projectList();
  }
  public goToEditProject() {
    this.router.navigate(['../../projectManagement/editProject'])
  }
  public goToActivityProject() {
    this.router.navigate(['../../projectManagement/InformationActivity'])
  }
  public goToChartPage() {
    this.router.navigate(['../../projectManagement/chart'])
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت شرکت', false, '');
    this.path2 = new DisplayPathModel('پروفایل شرکت', false, '');
  }

  public setFilterState(state: ProjectState) {
    this.projectStateDisplay = state;
  }

  public changeToPersian(num:string){
    return this.numberFormaterService.covertToFrNumber(num)
  }
  checkPage() {
    // return i = this.SelectedPage;
  }
  public changeSelectedPage() {
    // this.showItemsSkeleton.emit(true);
    // this.examFormStructureSelectedDto.emit(this.formPagingStructure.examFormPagSelcedDtos[index]);
    // this.currentPageIndexSelected.emit(index);
    // this.SelectedPage = index;
    // this.checkPage(index);
    // this.showFormacellDetail.emit(false);
    // setTimeout(() => {
    //   this.showItemsSkeleton.emit(false);
    // }, 500);
  }

  private getQueryParam() {
    let companyName = this.activeRouting.snapshot.queryParamMap.get('companyName');
    if(companyName) this.companyName = companyName;
    let companyStatus = this.activeRouting.snapshot.queryParamMap.get('companyStatus');
    if(companyStatus) {
      if (companyStatus=='0') {
        this.companyStatus = 'بررسی نشده';
      }
      else if (companyStatus=='1') {
        this.companyStatus = 'بررسی شده و تایید شده';
      }
      else if (companyStatus=='2') {
        this.companyStatus = 'بررسی شده و رد شده';
      }
    }
    let companyEconomicCode = this.activeRouting.snapshot.queryParamMap.get('companyEconomicCode');
    if(companyEconomicCode) this.companyEconomicCode = companyEconomicCode;
    let companyAreaExpertise = this.activeRouting.snapshot.queryParamMap.get('companyAreaExpertise');
    if(companyAreaExpertise) {
      if (companyStatus=='0') {
        this.companyAreaExpertise = 'بهداشت';
      }
      else if (companyStatus=='1') {
        this.companyAreaExpertise = 'آب رسانی';
      }
      else if (companyStatus=='2') {
        this.companyAreaExpertise = 'مسکن';
      }
      else if (companyStatus=='3') {
        this.companyAreaExpertise = 'راه سازی';
      }
    }
    let idCompany = this.activeRouting.snapshot.queryParamMap.get('idCompany');
    console.log(idCompany)
    if (idCompany) this.idCompany=idCompany;
  }

  public projectList(){
    this.projectConnectToApiService.getProjectsGeneralInfoOfCompany
    (new GetProjectsGeneralInfoOfCompanyDto('09e8ff21-ad1f-ed11-bec9-b1f673a1bda0',1)).subscribe((res: ApiResult<ProjectSelectedDTO[]>)=>{
      this.list = res.data;
    })
  }

}

export enum ProjectState {
  none, inProgress, done, motamam
}
