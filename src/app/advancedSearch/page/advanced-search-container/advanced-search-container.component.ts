import { AdvancedSearchConnecctToApiService } from './../../service/advancedSearchConnecctToApi/advanced-search-connecct-to-api.service';
import { Component, OnInit } from '@angular/core';
import {DisplayPathModel} from "../../../shared/model/displayPathModel";
import {GetProjectsWithDynamicFilterDto, ProjectStatus, ReportState} from "../../model/advanceSearch";
import { ApiResult } from '../../../auth/model/authDTO';
import { ProjectSelectedDTO, ProjectSelectedDTOResualt } from 'src/app/projectManagement/model/project/projectDto';
import { UserRole } from '../../../shared/model/naveBarModel';
import { url } from 'src/assets/url/url';
import { CompanySelectedDTO } from 'src/app/workSpace/model/companyModel';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-advanced-search-container',
  templateUrl: './advanced-search-container.component.html',
  styleUrls: ['./advanced-search-container.component.scss',
    '../../../managementReport/page/reportOfCompanyForOrganisationManager/report-on-efficiency-for-organisation-manager/report-on-efficiency-for-organisation-manager.component.scss',
    '../../../../assets/style/base.scss', '../../../shared/page/drop-down-project-list/drop-down-project-list.component.scss']
})
export class AdvancedSearchContainerComponent implements OnInit {
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public showChart: boolean = false;
  public optionsIncome: any;
  public reportState: ReportState = 0;
  public selectedCompanyId: string;
  public updateData: boolean = true;
  private projectStatus: ProjectStatus;
  private startTimeOfProjectLowerBound: string;
  private startTimeOfProjectUpperBound: string;
  private getProjectsWithDynamicFilter: GetProjectsWithDynamicFilterDto;
  public currentUserIsAdmin: boolean;
  public projectList: ProjectSelectedDTO[] = [];

  constructor(private advancedSearchConnecctToApiService: AdvancedSearchConnecctToApiService) {
    this.subscribeProjectSelected();
  }

  ngOnInit(): void {
    this.initDisplayPath();
    this.checkIsUserAdmin();
  }

  private subscribeProjectSelected() {
    this.advancedSearchConnecctToApiService.projectListHandel.subscribe((res: ProjectSelectedDTO[]) => {
      this.projectList = [];
      setTimeout(() => {
        this.projectList = res;
      }, 150);
    });
  }


  private checkIsUserAdmin() {
    let userRole = localStorage.getItem(url.userRole);

    if(userRole == 'notAdmin') {
      let company = localStorage.getItem(url.CompanyInfo);
      if(company) {
        let c = new CompanySelectedDTO();
        c = JSON.parse(company)
        this.advancedSearchConnecctToApiService.companyIdSelected.emit(c.companyId);
        this.getProjectsWithDynamicFilter = new GetProjectsWithDynamicFilterDto(c.companyId);
      }
    }
    this.currentUserIsAdmin = (userRole == 'admin');
  }

  public setReportState(state: ReportState) {
    this.reportState = state;
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت پروژه', false, '');
    this.path2 = new DisplayPathModel('جستجو پیشرفته', false, '');
  }

  public changeShowChart(value: boolean) {
    this.showChart = value;
  }

  public setSelectedCompanyId(id: any) {
    this.updateData = false;
    setTimeout(() => {
      this.updateData = true;
    }, 200);
    this.selectedCompanyId = id;
    this.getProjectsWithDynamicFilter = new GetProjectsWithDynamicFilterDto(id);

    this.searchProject();
  }

  public setProjectState(state: ProjectStatus) {
    this.projectStatus = state;
    this.getProjectsWithDynamicFilter.projectStatus = state;
    this.searchProject();
  }

  public setStartTime(event: string) {
    this.getProjectsWithDynamicFilter.startTimeOfProjectLowerBound = (event);
    this.searchProject();
  }

  public setEndTime(event: string) {
    this.getProjectsWithDynamicFilter.startTimeOfProjectUpperBound = (event);
    this.searchProject();
  }

  public searchProject() {
    this.advancedSearchConnecctToApiService.getProjectsWithDynamicFilter(
      this.getProjectsWithDynamicFilter
    ).subscribe((res: ApiResult<ProjectSelectedDTOResualt>) => {
      this.advancedSearchConnecctToApiService.projectListHandel.emit(res.data.projectSelectedDTOs);
    })
  }
}
