import { priceUnit } from './../../../shared/model/unit';
import { AllocationReportPaginationSelectedDto, AllocationReportSelectedDto, ProgressReportPaginationSelectedDto, ProgressReportSelectedDto } from './../../model/getReports';
import { DisplayPathModel } from './../../../shared/model/displayPathModel';
import { Component, OnInit } from '@angular/core';
import { ReportConnectionToApiService } from '../../service/reportConnectionToApi/report-connection-to-api.service';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { CompanySelectedDTO } from 'src/app/workSpace/model/companyModel';
import { url } from 'src/assets/url/url';

@Component({
  selector: 'app-project-controle-reports',
  templateUrl: './project-controle-reports.component.html',
  styleUrls: ['./project-controle-reports.component.scss']
})
export class ProjectControleReportsComponent implements OnInit {
  public allocationReportSelectedDtos: AllocationReportSelectedDto[];
  public progressReportSelectedDtos:	ProgressReportSelectedDto[];
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public projectId: string;
  public selectedTab: number = 1;
  public listAllocationReport: Array<AllocationReportSelectedDto>;
  public listProgressReport: Array<ProgressReportSelectedDto>;
  public companyId: string;
  public checkedReport: boolean = false;

  constructor(private reportConnectionToApiService:ReportConnectionToApiService){ }

  ngOnInit(): void {
    this.initDisplayPath();
    this.setCompanyId();
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت پروژه', false, '');
    this.path2 = new DisplayPathModel('مدیریت گزارش ها', false, '');
  }

  public setProjectId($event: any) {
    this.projectId = '';
    setTimeout(() => {
      this.projectId = $event;
    }, 200);
  }

  public setSelectedTab(index: number) {
    this.selectedTab = index;
  }

  private setCompanyId() {
    let com = localStorage.getItem(url.CompanyInfo);
    if(com) {
      let c = new CompanySelectedDTO();
      c = JSON.parse(com);
      this.companyId = c.companyId;
    }
  }
}
