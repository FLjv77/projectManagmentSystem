import { AllocationReportPaginationSelectedDto, AllocationReportSelectedDto, ProgressReportPaginationSelectedDto, ProgressReportSelectedDto } from './../../model/getReports';
import { DisplayPathModel } from './../../../shared/model/displayPathModel';
import { Component, OnInit } from '@angular/core';
import { ReportConnectionToApiService } from '../../service/reportConnectionToApi/report-connection-to-api.service';
import { ApiResult } from 'src/app/auth/model/authDTO';

@Component({
  selector: 'app-project-controle-reports',
  templateUrl: './project-controle-reports.component.html',
  styleUrls: ['./project-controle-reports.component.scss']
})
export class ProjectControleReportsComponent implements OnInit {

  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public projectId: string| string[];
  public listAllocationReport: Array<AllocationReportSelectedDto>;
  public listProgressReport: Array<ProgressReportSelectedDto>;

  constructor(private reportConnectionToApiService:ReportConnectionToApiService) { }

  ngOnInit(): void {
    this.initDisplayPath();
    // this.reportConnectionToApiService.GetUsersWithDynamicFilter().subscribe((res: ApiResult<boolean>)=>{
    //   console.log('1111111111111111111111');
    //   console.log(res);
    // });
    //this.getUserByDynamickFilter();
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت پروژه', false, '');
    this.path2 = new DisplayPathModel('مدیریت گزارش ها', false, '');
  }

  public setProjectId($event: string|string[]){
    this.projectId = $event;
    this.getReports();
  }

  // private getUserByDynamickFilter() {
  //   this.reportConnectionToApiService.GetUsersWithDynamicFilter().subscribe((res: ApiResult<boolean>)=>{
  //     console.log(res);
  //   });
  // }

  private getReports(){
    /*
    this.reportConnectionToApiService.GetAllocationReportsForSupervisor(this.projectId).subscribe
    ((res:ApiResult<AllocationReportPaginationSelectedDto>)=>{
      this.listAllocationReport = res.data.allocationReportSelectedDtos;
    });
    this.reportConnectionToApiService.GetProgressReportsForSupervisor(this.projectId).subscribe((
      res: ApiResult<ProgressReportPaginationSelectedDto>)=>{
        this.listProgressReport = res.data.progressReportSelectedDtos;
      })
    */

  }
}
