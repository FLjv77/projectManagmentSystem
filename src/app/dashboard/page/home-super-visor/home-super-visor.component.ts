import { url } from './../../../../assets/url/url';
import { ReportConnectionToApiService } from './../../../managementReport/service/reportConnectionToApi/report-connection-to-api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayPathModel } from '../../../shared/model/displayPathModel';
import { ApiResult } from '../../../auth/model/authDTO';
import { ProjectForSupervisor } from 'src/app/managementReport/model/getReports';
import { SidebarControleServiceService } from 'src/app/shared/service/sidebarControleService/sidebar-controle-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home-super-visor',
  templateUrl: './home-super-visor.component.html',
  styleUrls: ['./home-super-visor.component.scss',
  '../../../workSpace/page/confirm-registred-company/confirm-registred-company.component.scss',
  '../../../advancedSearch/page/advanced-search-according-to-allocation/advanced-search-according-to-allocation.component.scss',
  '../../../../assets/style/base.scss'
]
})
export class HomeSuperVisorComponent implements OnInit {
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public listProject: ProjectForSupervisor[];
  constructor(private router: Router,
    private sidebarControleServiceService: SidebarControleServiceService,
    private reportConnectionToApiService: ReportConnectionToApiService) { }

  ngOnInit(): void {
    this.initDisplayPath();
    this.getReportAllocation();
    this.getReportProgress();
    this.getReport();
    this.setRole();
  }

  public setRole(){
    let role = 'supervisor';
    localStorage.removeItem(url.RoleHome);
    localStorage.setItem(url.RoleHome,role);
  }

  private getReport() {
    this.reportConnectionToApiService.GetProjectsForSupervisorThatHasOpenReport().subscribe((res: ApiResult<ProjectForSupervisor[]>) => {
      if(res.isSuccess && res.statusCode == 200) {
        this.listProject = res.data;
      } else {
        this.sidebarControleServiceService.logOut();
      }
    }, (err: HttpErrorResponse) => {
      this.sidebarControleServiceService.logOut();
    });
  }

  private getReportAllocation() {
    // this.reportConnectionToApiService.GetAllocationReports(
    //   this.projectId
    // ).subscribe((res: ApiResult<AllocationReportPaginationSelectedDto>) => {
    //   if(res.isSuccess && res.statusCode == 200) {
    //     this.allocationReportSelectedDtos = res.data.allocationReportSelectedDtos;
    //   }
    // });
  }

  private getReportProgress() {
    // this.reportConnectionToApiService.GetProgressReports(
    //   this.projectId
    // ).subscribe((res: ApiResult<ProgressReportPaginationSelectedDto>) => {
    //   if(res.isSuccess && res.statusCode == 200) {
    //     this.progressReportSelectedDtos = res.data.progressReportSelectedDtos;
    //   }
    // });
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('داشبورد', false, '');
    this.path2 = new DisplayPathModel('خانه', false, '');
  }

  public goToEditProject(projectId: string) {
    this.router.navigate(['../../managementReport/projectControleReports'], {queryParams: { projectId: projectId }});
  }
  public goToActivityProject() {
    this.router.navigate(['../../projectManagement/InformationActivity'])
  }
  public goToChartPage() {
    this.router.navigate(['../../projectManagement/chart'])
  }

}
