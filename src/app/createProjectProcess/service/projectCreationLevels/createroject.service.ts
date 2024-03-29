import { SupervisorUserRegisterDTO, SupervisorSelectedDTO } from './../../../auth/model/userDTO';
import { Select2OptionData } from 'ng-select2';
import { Participant, ResourceInformation, SearchLocationSelectedDto, State, City, Region } from './../../model/createProjectModel/createProject';
import { CreateProjectDTO, CreateActivityDTO, CreateParentActivityDTO } from '../../model/createProjectModel/createProject';
import { url } from 'src/assets/url/url';
import { ApiResult } from './../../../auth/model/authDTO';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { TargetsOfProjectSelectedDto } from '../../model/createProjectModel/target';

@Injectable({
  providedIn: 'root'
})
export class CreaterojectService {

  constructor(private http: HttpClient) { }

  public cityList = new EventEmitter<Array<Select2OptionData>>();
  public regionList = new EventEmitter<Array<Select2OptionData>>();
  public villageList = new EventEmitter<Array<Select2OptionData>>();

  public CreateProject(companyId: string|null,createProject: CreateProjectDTO): Observable<ApiResult<string>>{
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

  public ModifyProjectParticipant(projectId: string|null,userListRequest:Participant[]): Observable<ApiResult<Participant[]>>{
    return this.http.post<ApiResult<Participant[]>>(url.ModifyProjectParticipant + projectId , userListRequest);
  }

  public ModifyProjectResourceInformation(projectId: string, data: ResourceInformation): Observable<ApiResult<boolean>>{
    return this.http.put<ApiResult<boolean>>(url.ModifyProjectResourceInformation + projectId , data);
  }

  public ModifyProjectResourceInformation1(projectId: string|string[], data: ResourceInformation): Observable<ApiResult<boolean>>{
    return this.http.put<ApiResult<boolean>>(url.ModifyProjectResourceInformation + projectId , data);
  }

  public UploadDocumentsOfProject(projectId: string, imageForm: File): Observable<ApiResult<boolean>>{
    const imageFormData = new FormData();
    imageFormData.append('media', imageForm);
    return this.http.post<ApiResult<boolean>>(url.UploadDocumentsOfProject + projectId , imageFormData);
  }

  public AssigneUserAsProjectSupervisor(projectId: string|string[],userName:string): Observable<ApiResult<boolean>>{
    return this.http.post<ApiResult<boolean>>(url.AssigneUserAsProjectSupervisor
       + projectId + '?userName=' + userName,userName);
  }

  public GetProjectSupervisor(projectId: string|string[]): Observable<ApiResult<SupervisorSelectedDTO>>{
    return this.http.get<ApiResult<SupervisorSelectedDTO>>(url.GetProjectSupervisor+projectId);
  }

  // public SearchLocation(stateName?: string, cityName?: string, regionName?: string, ruralName?: string): Observable<ApiResult<SearchLocationSelectedDto>> {
  //   return this.http.get<ApiResult<SearchLocationSelectedDto>>(
  //     url.SearchLocation +
  //     (stateName? '?stateName=' + stateName :'') +
  //     (cityName? '&cityName=' + cityName : '') +
  //     (regionName? '&regionName=' + regionName : '') +
  //     (ruralName? '&ruralName=' + ruralName : '')
  //     );

  // }
  // public SearchLocation1(stateName: string| string[]): Observable<ApiResult<State[]>> {
  //   return this.http.get<ApiResult<State[]>>(
  //     url.SearchLocation +'?stateName=' + stateName)
  // }
  // public SearchLocation2(stateName: string|string[], cityName: string| string[]): Observable<ApiResult<City[]>> {
  //   return this.http.get<ApiResult<City[]>>(
  //     url.SearchLocation +'?stateName=' + stateName + '&cityName=' + cityName)
  // }

  // public SearchLocation3(stateName: string|string[], cityName: string| string[], regionName: string|string[]): Observable<ApiResult<Region[]>> {
  //   return this.http.get<ApiResult<Region[]>>(
  //     url.SearchLocation + '?stateName=' + stateName + '&cityName=' + cityName +'&regionName=' + regionName);

  // }

  public GetItemOfRegions(stateName?: string|string[], cityName?: string|string[], regionName?: string|string[]
    , ruralName?: string|string[]): Observable<ApiResult<Array<string>>> {
    return this.http.get<ApiResult<Array<string>>>(url.GetItemOfRegions +
      (stateName? '?stateName=' + stateName :'') +
      (cityName? '&cityName=' + cityName : '') +
      (regionName? '&regionName=' + regionName : '') +
      (ruralName? '&ruralName=' + ruralName : '')
    );
  }
}
