import { ApiResult } from './../../../../auth/model/authDTO';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityDependencyDto, ActivityHierarchicalStructureSelectedDTO, CreateActivityDTO, DependencyActivity, RequestCreateActivityDependency, showActivityDto } from 'src/app/projectManagement/model/activity/activityDto';
import { url } from 'src/assets/url/url';

@Injectable({
  providedIn: 'root'
})
export class ActivityConnectToApiService {

  constructor(private http: HttpClient) { }

  public modifyDependentActivity(dependency: RequestCreateActivityDependency): Observable<ApiResult<boolean>> {
    return this.http.post<ApiResult<boolean>>(url.modifyDependentActivity + dependency.projectId, dependency.createActivityDependency);
  }

  public showDependentActivities(projectId: string): Observable<ApiResult<[string, [string, number]][]>> {
    return this.http.get<ApiResult<[string, [string, DependencyActivity]][]>>(url.showDependentActivities + projectId);
  }

  public showActivities(projectId: string): Observable<ApiResult<showActivityDto[]>> {
    return this.http.get<ApiResult<showActivityDto[]>>(url.showActivities + projectId + '?pageId=1&take=100'
    );
  }

  public createActivities(createActivity: CreateActivityDTO, projectId: string): Observable<ApiResult<string>> {
    return this.http.post<ApiResult<string>>(url.CreateActivity + projectId, createActivity);
  }

  public showHierarchicalStructureActivities(projectId: string): Observable<ApiResult<ActivityHierarchicalStructureSelectedDTO[]>> {
    return this.http.get<ApiResult<ActivityHierarchicalStructureSelectedDTO[]>>(url.showHierarchicalStructureActivities + projectId);
  }
}
