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
  private projectDetail: ProjectSelectedDTO;
  private projectId: string;

  constructor(private activeRouting: ActivatedRoute,
    private handleDisplayError: HandleDisplayErrorService,
    private projectConnectToApiService: ProjectConnectToApiService) { }

  ngOnInit(): void {
    this.initDisplayPath();
    this.getProjectId();
  }

  private getProjectId() {
    let id = this.activeRouting.snapshot.queryParamMap.get('projectId');
    if (id) this.projectId = id;
  }

  private getProjectDetail() {
    this.projectConnectToApiService.getProjectGeneralProperties(this.projectId).subscribe(
      (res: ApiResult<ProjectSelectedDTO>) => {
        if(res.isSuccess && res.statusCode == 200) {
          this.projectDetail = res.data;
          this.handleDisplayError.showError(res.statusCode);
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
