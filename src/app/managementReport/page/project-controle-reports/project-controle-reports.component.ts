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
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public projectId: string;
  public listAllocationReport: Array<AllocationReportSelectedDto>;
  public listProgressReport: Array<ProgressReportSelectedDto>;
  public companyId: string;

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
    this.projectId = $event;
    this.getReportProgress();
  }


  private setCompanyId() {
    let com = localStorage.getItem(url.CompanyInfo);
    if(com) {
      let c = new CompanySelectedDTO();
      c = JSON.parse(com);
      this.companyId = c.companyId;
    }
  }

  private getReport() {
    this.reportConnectionToApiService.GetAllocationReportsForSupervisor(
      this.projectId
    ).subscribe((res: ApiResult<AllocationReportPaginationSelectedDto>) => {
      if(res.isSuccess && res.statusCode == 200) {
        this.allocationReportSelectedDtos = res.data.allocationReportSelectedDtos;
      }
    });
  }


  private getReportProgress() {
    this.reportConnectionToApiService.GetProgressReportsForSupervisor(
      this.projectId
    ).subscribe((res: ApiResult<ProgressReportPaginationSelectedDto>) => {
      if(res.isSuccess && res.statusCode == 200) {
      }
    });
  }
}
