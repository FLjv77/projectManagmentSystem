import { EventEmitter, Injectable } from '@angular/core';
import { ApiResult } from '../../../auth/model/authDTO';
import { Observable } from 'rxjs';
import { CompanyProjectProgress, ProjectSelectedDTO, ProjectSelectedDTOResualt } from '../../../projectManagement/model/project/projectDto';
import { HttpClient } from '@angular/common/http';
import { url } from '../../../../assets/url/url';
import { GetProjectsWithDynamicFilterDto } from '../../model/advanceSearch';

@Injectable({
  providedIn: 'root'
})
export class AdvancedSearchConnecctToApiService {
  public companyIdSelected = new EventEmitter<string | string[]>();
  public changed = new EventEmitter<boolean>();
  public projectIdSelected = new EventEmitter<string | string[]>();
  public projectListHandel = new EventEmitter<ProjectSelectedDTO[]>();

  constructor(private http: HttpClient) { }

  public getProjectsWithDynamicFilter(getProjectsWithDynamicFilterDto: GetProjectsWithDynamicFilterDto):Observable<ApiResult<ProjectSelectedDTOResualt>> {
    return this.http.get<ApiResult<ProjectSelectedDTOResualt>>(
      url.getProjectsWithDynamicFilter +
      getProjectsWithDynamicFilterDto.companyId + '?' +
      ((getProjectsWithDynamicFilterDto.projectStatus != undefined) ? ('projectStatus=' + getProjectsWithDynamicFilterDto.projectStatus) + '&' : '') +
      ((getProjectsWithDynamicFilterDto.startTimeOfProjectLowerBound != undefined) ? ('startTimeOfProjectLowerBound=' + getProjectsWithDynamicFilterDto.startTimeOfProjectLowerBound) + '&' : '') +
      ((getProjectsWithDynamicFilterDto.startTimeOfProjectUpperBound != undefined) ? ('startTimeOfProjectUpperBound=' + getProjectsWithDynamicFilterDto.startTimeOfProjectUpperBound) + '&' : '') +
      'activePage=1&takeEntity=100'

      )

  }

  public ComputeCompanyProjectProgress(companyId?: string): Observable<ApiResult<CompanyProjectProgress[]>> {
    return this.http.get<ApiResult<CompanyProjectProgress[]>>
    (url.ComputeCompanyProjectProgress + ((companyId != undefined) ? ('?companyId=' + companyId) : ''));
  }
}

