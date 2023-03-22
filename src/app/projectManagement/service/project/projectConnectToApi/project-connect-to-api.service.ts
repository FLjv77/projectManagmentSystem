import { UpdateProjectDTO } from './../../../model/project/projectDto';
import { Injectable, EventEmitter } from '@angular/core';
import { ApiResult } from '../../../../auth/model/authDTO';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetProjectsGeneralInfoOfCompanyDto, ProjectSelectedDTO, ProjectSortedBy } from 'src/app/projectManagement/model/project/projectDto';
import { url } from '../../../../../assets/url/url';
import { MediaSelectedDTO } from 'src/app/managementReport/model/getReports';

@Injectable({
  providedIn: 'root'
})
export class ProjectConnectToApiService {

  constructor(private http: HttpClient) { }

  public getProjectsGeneralInfoOfCompany(getProjectsGeneralInfoOfCompanyDto: GetProjectsGeneralInfoOfCompanyDto): Observable<ApiResult<ProjectSelectedDTO[]>> {
    return this.http.get<ApiResult<ProjectSelectedDTO[]>>(url.getProjectsGeneralInfoOfCompany + getProjectsGeneralInfoOfCompanyDto.companyId + '?projectSortedBy=' + (getProjectsGeneralInfoOfCompanyDto.projectSortedBy ? getProjectsGeneralInfoOfCompanyDto.projectSortedBy : ProjectSortedBy.nearestCreationDate.toString));
  }

  public getProjectGeneralProperties(projectId: string|null): Observable<ApiResult<ProjectSelectedDTO>> {
    return this.http.get<ApiResult<ProjectSelectedDTO>>(url.GetProjectGeneralPropertiesById + projectId);
  }

  public getProjectGeneralPropertiesSelect(projectId: string|string[]): Observable<ApiResult<ProjectSelectedDTO>> {
    return this.http.get<ApiResult<ProjectSelectedDTO>>(url.GetProjectGeneralPropertiesById + projectId);
  }

  public getProjectGeneralProperties1(projectId: string|null): Observable<ApiResult<ProjectSelectedDTO>> {
    return this.http.get<ApiResult<ProjectSelectedDTO>>(url.GetProjectGeneralPropertiesById + projectId);
  }

  public ModifyProjectGeneralInfo(projectId : string|string[],updateProjectDTO: UpdateProjectDTO): Observable<ApiResult<boolean>>{
    return this.http.put<ApiResult<boolean>>(url.ModifyProjectGeneralInfo + projectId,updateProjectDTO);
  }

  public GetProjectMedia(projectId: string): Observable<ApiResult<MediaSelectedDTO[]>> {
    return this.http.get<ApiResult<MediaSelectedDTO[]>>(url.GetProjectMedia + projectId);
  }

  public DeleteDocumentOfProject(projectId: string, fileId: string): Observable<ApiResult<boolean>> {
    return this.http.post<ApiResult<boolean>>(url.DeleteDocumentOfProject + projectId + '/' + fileId, '');
  }

}
