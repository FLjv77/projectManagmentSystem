import { EventEmitter, Injectable } from '@angular/core';
import { ApiResult } from '../../../auth/model/authDTO';
import { Observable } from 'rxjs';
import { ProjectSelectedDTO } from '../../../projectManagement/model/project/projectDto';
import { HttpClient } from '@angular/common/http';
import { url } from '../../../../assets/url/url';
import { GetProjectsWithDynamicFilterDto } from '../../model/advanceSearch';

@Injectable({
  providedIn: 'root'
})
export class AdvancedSearchConnecctToApiService {
  public companyIdSelected = new EventEmitter<string | string[]>();

  constructor(private http: HttpClient) { }

  public getProjectsWithDynamicFilter(getProjectsWithDynamicFilterDto: GetProjectsWithDynamicFilterDto):Observable<ApiResult<ProjectSelectedDTO[]>> {
    return this.http.get<ApiResult<ProjectSelectedDTO[]>>(url.getProjectsWithDynamicFilter + getProjectsWithDynamicFilterDto.companyId);
  }
}
