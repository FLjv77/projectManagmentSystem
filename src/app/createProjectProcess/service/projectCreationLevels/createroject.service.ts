import { CreateProjectDTO, CreateActivityDTO, CreateParentActivityDTO } from '../../model/createProjectModel/createProject';
import { url } from 'src/assets/url/url';
import { ApiResult } from './../../../auth/model/authDTO';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TargetsOfProjectSelectedDto } from '../../model/createProjectModel/target';

@Injectable({
  providedIn: 'root'
})
export class CreaterojectService {

  constructor(private http: HttpClient) { }

  public CreateProject(companyId: string,createProject: CreateProjectDTO): Observable<ApiResult<string>>{
    return this.http.post<ApiResult<string>>(url.CreateProject + '/' + companyId ,createProject);
  }

  public CreateParentActivity(projectId : string, createActivity: CreateParentActivityDTO): Observable<ApiResult<string>>{
    return this.http.post<ApiResult<string>>(url.CreateActivity + '/' + projectId , createActivity);
  }

  public CreateActivity(projectId : string, createActivity: CreateActivityDTO): Observable<ApiResult<string>>{
    return this.http.post<ApiResult<string>>(url.CreateActivity + '/' + projectId , createActivity);
  }

  public getTargetsOfProject(): Observable<ApiResult<TargetsOfProjectSelectedDto[]>> {
    return this.http.get<ApiResult<TargetsOfProjectSelectedDto[]>>(url.GetTargetsOfProject);
  }

}
