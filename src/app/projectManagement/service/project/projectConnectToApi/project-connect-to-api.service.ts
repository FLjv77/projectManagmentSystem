import { Injectable } from '@angular/core';
import { ApiResult } from '../../../../auth/model/authDTO';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetProjectsGeneralInfoOfCompanyDto, ProjectSelectedDTO, ProjectSortedBy } from 'src/app/projectManagement/model/project/projectDto';
import { url } from '../../../../../assets/url/url';

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

  public getProjectGeneralProperties1(projectId: string|string[]): Observable<ApiResult<ProjectSelectedDTO>> {
    return this.http.get<ApiResult<ProjectSelectedDTO>>(url.GetProjectGeneralPropertiesById + projectId);
  }
}
