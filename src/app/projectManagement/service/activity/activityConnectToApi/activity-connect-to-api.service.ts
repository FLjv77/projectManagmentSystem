import { ApiResult } from './../../../../auth/model/authDTO';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateActivityDTO, RequestCreateActivityDependency } from 'src/app/projectManagement/model/activity/activityDto';
import { url } from 'src/assets/url/url';

@Injectable({
  providedIn: 'root'
})
export class ActivityConnectToApiService {

  constructor(private http: HttpClient) { }

  public modifyDependentActivity(dependency: RequestCreateActivityDependency): Observable<ApiResult<boolean>> {
    return this.http.post<ApiResult<boolean>>(url.modifyDependentActivity + dependency.projectId, dependency.createActivityDependency);
  }

  public showDependentActivities(projectId: string): Observable<ApiResult<any>> {
    return this.http.get<ApiResult<any>>(url.showDependentActivities + projectId);
  }

  public createActivities(createActivity: CreateActivityDTO, projectId: string): Observable<ApiResult<string>> {
    return this.http.post<ApiResult<string>>(url.CreateActivity + projectId, createActivity);
  }

  public showHierarchicalStructureActivities(projectId: string): Observable<ApiResult<any>> {
    return this.http.get<ApiResult<any>>(url.showHierarchicalStructureActivities + projectId);
  }
}
