import { ReportConnectionToApiService } from './../../../managementReport/service/reportConnectionToApi/report-connection-to-api.service';
import { url } from './../../../../assets/url/url';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DisplayPathModel} from "../../../shared/model/displayPathModel";
import { ProjectSelectedDTO } from '../../model/project/projectDto';
import { ProjectConnectToApiService } from '../../service/project/projectConnectToApi/project-connect-to-api.service';
import { ApiResult } from '../../../auth/model/authDTO';
import { HttpErrorResponse } from '@angular/common/http';
import { HandleDisplayErrorService } from '../../../shared/service/handleError/handle-display-error.service';

@Component({
  selector: 'app-edit-project-information',
  templateUrl: './edit-project-information.component.html',
  styleUrls: ['./edit-project-information.component.scss', '../../../../assets/style/base.scss']
})
export class EditProjectInformationComponent implements OnInit {
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public path3: DisplayPathModel;
  public projectDetail: ProjectSelectedDTO;
  public projectId: string|string[];
  public show: boolean;
  public setValues: boolean;

  constructor(private activeRouting: ActivatedRoute,
    private handleDisplayError: HandleDisplayErrorService,
    private projectConnectToApiService: ProjectConnectToApiService,
    private reportConnectionToApiService:ReportConnectionToApiService) { }

  ngOnInit(): void {
    this.initDisplayPath();
    this.checkCompany();
    this.getProjectId();
    this.getProjectDetail();
  }

  public checkCompany(){
    if (url.userRole == 'notAdmin') {
      this.show=false;
      this.reportConnectionToApiService.CompanyName.emit(url.companyName);
    }
    else if (url.userRole == 'admin') {
      this.show=true;
    }
    else{this.show=true;}
  }

  private getProjectId() {
    let id = this.activeRouting.snapshot.queryParamMap.get('projectIdEdit');
    if (id) this.projectId = id;
  }

  public setProjectId(event: string|string[]){
    this.projectId = event;
  }

  private getProjectDetail() {
    this.projectConnectToApiService.getProjectGeneralPropertiesSelect(this.projectId).subscribe(
      (res: ApiResult<ProjectSelectedDTO>) => {
        if(res.isSuccess && res.statusCode == 200) {
          this.projectDetail = res.data;
        }
      }, (err: HttpErrorResponse) => {
        this.handleDisplayError.showError(err.error.StatusCode);
      }
    )
  }
  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت شرکت', false, '');
    this.path2 = new DisplayPathModel('پروفایل شرکت', true, 'workspace/workSpaceProfile');
    this.path3 = new DisplayPathModel('ویرایش پروژه', false, '');
  }
}
