import { AdvancedSearchConnecctToApiService } from './../../service/advancedSearchConnecctToApi/advanced-search-connecct-to-api.service';
import { Component, OnInit } from '@angular/core';
import {DisplayPathModel} from "../../../shared/model/displayPathModel";
import {GetProjectsWithDynamicFilterDto, ProjectStatus, ReportState} from "../../model/advanceSearch";
import { ApiResult } from '../../../auth/model/authDTO';
import { ProjectSelectedDTO } from 'src/app/projectManagement/model/project/projectDto';

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
  public showChart: boolean = true;
  public optionsIncome: any;
  public reportState: ReportState = 0;
  private selectedCompanyId: string;
  private projectStatus: ProjectStatus;
  private startTimeOfProjectLowerBound: string;
  private startTimeOfProjectUpperBound: string;
  private getProjectsWithDynamicFilter: GetProjectsWithDynamicFilterDto;

  constructor(private advancedSearchConnecctToApiService: AdvancedSearchConnecctToApiService) {
    this.setSelectedCompanyId();
  }

  ngOnInit(): void {
    this.initDisplayPath();
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

  public setSelectedCompanyId() {
    this.advancedSearchConnecctToApiService.companyIdSelected.subscribe((id: string) => {
      this.selectedCompanyId = id;
      this.getProjectsWithDynamicFilter = new GetProjectsWithDynamicFilterDto(id);
    });
  }


  public setProjectState(state: ProjectStatus) {
    this.projectStatus = state;
    this.getProjectsWithDynamicFilter.projectStatus = state;
  }

  public setStartTime(event: string) {
    this.getProjectsWithDynamicFilter.startTimeOfProjectLowerBound = (event);
  }

  public setEndTime(event: string) {
    this.getProjectsWithDynamicFilter.startTimeOfProjectUpperBound = (event);
  }

  public searchProject() {
    this.advancedSearchConnecctToApiService.getProjectsWithDynamicFilter(
      this.getProjectsWithDynamicFilter
    ).subscribe((res: ApiResult<ProjectSelectedDTO[]>) => {
      console.log(res);

    })
  }
}
