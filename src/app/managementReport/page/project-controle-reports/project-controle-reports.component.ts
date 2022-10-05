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

  constructor(private reportConnectionToApiService:ReportConnectionToApiService) { }

  ngOnInit(): void {
    this.initDisplayPath();
    this.getReports();
    this.reportConnectionToApiService.GetUsersWithDynamicFilter().subscribe((res: ApiResult<boolean>)=>{
      console.log('1111111111111111111111');
      console.log(res);
    });
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت پروژه', false, '');
    this.path2 = new DisplayPathModel('مدیریت گزارش ها', false, '');
  }

  private getReports(){
    
  }
}
