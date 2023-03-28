import { HttpErrorResponse } from '@angular/common/http';
import { Select2OptionData } from 'ng-select2';
import { priceUnit } from './../../../shared/model/unit';
import { AllocationReportPaginationSelectedDto, AllocationReportSelectedDto, ProgressReportPaginationSelectedDto, ProgressReportSelectedDto, ProjectForSupervisor } from './../../model/getReports';
import { DisplayPathModel } from './../../../shared/model/displayPathModel';
import { Component, OnInit } from '@angular/core';
import { ReportConnectionToApiService } from '../../service/reportConnectionToApi/report-connection-to-api.service';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { CompanySelectedDTO } from 'src/app/workSpace/model/companyModel';
import { url } from 'src/assets/url/url';
import { ActivatedRoute } from '@angular/router';

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
  public projectId: string | null;
  public selectedTab: number = 1;
  public listAllocationReport: Array<AllocationReportSelectedDto>;
  public listProgressReport: Array<ProgressReportSelectedDto>;
  public companyId: string;
  public checkedReport: boolean = false;

  constructor(private reportConnectionToApiService:ReportConnectionToApiService,
    private activeRouting: ActivatedRoute){ }

  ngOnInit(): void {
    this.initDisplayPath();
    this.setCompanyId();
    this.getProjectId();
  }

  getProjectId() {
      let id = this.activeRouting.snapshot.queryParamMap.get('projectId');
      if(id) {
        this.projectId = '';
        setTimeout(() => {
          this.projectId = id;
        }, 200);
      }
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
      this.getProjectList();
    }
  }

  public empty : boolean = false;
  public showSpinner: boolean=false;
  public projectData: Array<Select2OptionData> =[];
  public placeHolder: Select2OptionData;

  private getProjectList() {
    if(!this.companyId) {
      let company = localStorage.getItem(url.CompanyInfo);
      if(company) {
        let c = new CompanySelectedDTO();
        c = JSON.parse(company);
        this.companyId = c.companyId;
      }
    }

    if(this.companyId) {      
      this.empty=false;
      this.showSpinner = true;
      this.reportConnectionToApiService.GetProjectsForSupervisorThatHasOpenReport().subscribe((res: ApiResult<ProjectForSupervisor[]>) => {
        if(res.isSuccess && res.statusCode == 200) {
          console.log(res.data);
          
          for(let i=0; i<res.data.length; i++) {
            let obj = {
              text: res.data[i].projectName,
              id: res.data[i].projectId
            }
            this.projectData.push(obj);
            console.log(this.projectData);
                        
          }
          console.log('res',this.projectData);
          this.showSpinner = false;

        } else {
          }

      }, (err: HttpErrorResponse) => {
          this.empty=true;
          this.showSpinner = false;
      });
    }

  }
}
