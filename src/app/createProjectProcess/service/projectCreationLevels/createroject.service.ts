import { CreateProjectDTO, CreateActivityDTO } from './../../model/createProject';
import { url } from 'src/assets/url/url';
import { ApiResult } from './../../../auth/model/authDTO';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreaterojectService {

  constructor(private http: HttpClient) { }

  public CreateProject(companyId: string,createProject: CreateProjectDTO): Observable<ApiResult<string>>{
    const headers = new HttpHeaders({
      'Authorization': 'true',
    });
    return this.http.post<ApiResult<string>>(url.CreateProject + '/' + companyId ,createProject, {headers});
  }

  public CreateActivity(projectId : string,createActivity: CreateActivityDTO): Observable<ApiResult<string>>{
    const headers = new HttpHeaders({
      'Authorization': 'true',
    });
    return this.http.post<ApiResult<string>>(url.CreateActivity + '/' + projectId ,createActivity, {headers});
  }  
}
