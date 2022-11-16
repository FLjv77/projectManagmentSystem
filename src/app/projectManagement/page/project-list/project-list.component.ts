import { Component, OnInit, AfterViewInit } from '@angular/core';
import {DisplayPathModel} from "../../../shared/model/displayPathModel";
import {ActivatedRoute, Router} from "@angular/router";
import { ProjectConnectToApiService } from '../../service/project/projectConnectToApi/project-connect-to-api.service';
import { GetProjectsGeneralInfoOfCompanyDto, ProjectSelectedDTO } from '../../model/project/projectDto';
import { ApiResult } from '../../../auth/model/authDTO';
import { HttpErrorResponse } from '@angular/common/http';
import { AdvancedSearchConnecctToApiService } from 'src/app/advancedSearch/service/advancedSearchConnecctToApi/advanced-search-connecct-to-api.service';
import { url } from 'src/assets/url/url';
import { CompanySelectedDTO } from 'src/app/workSpace/model/companyModel';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss', '../../../../assets/style/base.scss']
})
export class ProjectListComponent implements OnInit, AfterViewInit {
  private companyId: string | string[];
  public role: string| null;

  public projectList: ProjectSelectedDTO[];
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  constructor(
    private router: Router,
    private activeRouting: ActivatedRoute,
    private projectConnectToApiService: ProjectConnectToApiService,
    private advancedSearchConnecctToApiService:AdvancedSearchConnecctToApiService) {
      this.advancedSearchConnecctToApiService.companyIdSelected.subscribe((res: string | string[])=>{
        this.companyId = res;
        this.getProjectList();
      })
     }

  ngAfterViewInit(): void {
    this.getQueryParam();
  }

  ngOnInit(): void {
    this.initDisplayPath();
    this.getRole();
  }

  public getRole(){ 
    if (localStorage.getItem(url.RoleHome)!=null) {
      this.role = localStorage.getItem(url.RoleHome);
      if (this.role=='holdingAdmin') {
        localStorage.removeItem(url.RoleHome);
        localStorage.setItem(url.RoleHome,'holdingAdmin');
      } 
      else if (this.role=='companyAdmin') {
        localStorage.removeItem(url.RoleHome);
        localStorage.setItem(url.RoleHome,'companyAdmin');
      }
      else if (this.role=='supervisor') {
        localStorage.removeItem(url.RoleHome);
        localStorage.setItem(url.RoleHome,'supervisor');
      }
    }
  }


  private getQueryParam() {
    let id = this.activeRouting.snapshot.queryParamMap.get('idCompany');
    if(id) this.companyId = id;
    else {
      let com = localStorage.getItem(url.CompanyInfo);
      if(com) {
        let c = new CompanySelectedDTO();
        c = JSON.parse(com);
        this.companyId = c.companyId;
      }
    }
    this.getProjectList();
  }

  private getProjectList() {
    this.projectConnectToApiService.getProjectsGeneralInfoOfCompany(
      new GetProjectsGeneralInfoOfCompanyDto(
        this.companyId, 1
      )).subscribe((res: ApiResult<ProjectSelectedDTO[]>) => {
      if(res.isSuccess && res.statusCode == 200) {
        this.projectList = res.data;
      } else {

      }

    }, (err: HttpErrorResponse) => {

    });
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت پروژه', false, '');
    this.path2 = new DisplayPathModel('لیست پروژه ها', false, '');
  }

  public goEditProject(projectId: string){
    this.router.navigate(['../../projectManagement/editProject'], {queryParams: { projectIdEdit: projectId }});
  }

  public goInformationActivity(projectId: string) {
    this.router.navigate(['../../projectManagement/InformationActivity'], {queryParams: { projectId: projectId}})
  }

  public sendReport(projectId: string) {
    this.router.navigate(['../../managementReport/submitProgressReporter'], {queryParams: { projectId: projectId, reportType: 1}})
  }
}
