import { ProgressReportDTO } from './../../model/modelDtoAllocationReport';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { RequestAllocationReportDTO, RequestAllocationVerificationDTO } from '../../model/modelDtoAllocationReport';
import { url } from 'src/assets/url/url';
import { AllocationReportPaginationSelectedDto, ProgressReportPaginationSelectedDto } from '../../model/getReports';

@Injectable({
  providedIn: 'root'
})
export class ReportConnectionToApiService {

  constructor(private http: HttpClient) { }

  public registerAllocationReport(projectId: string,requestAllocationReportDTO: RequestAllocationReportDTO): Observable<ApiResult<string>> {
    return this.http.post<ApiResult<string>>(url.registerAllocationReport + projectId, requestAllocationReportDTO);
  }

  public allocationReportVerification(requestAllocationVerification: RequestAllocationVerificationDTO): Observable<ApiResult<boolean>> {
    return this.http.post<ApiResult<boolean>>(url.allocationReportVerification + requestAllocationVerification.allocationReportId, requestAllocationVerification.allocationVerificationDTO);
  }

  public RegisterProgressReport(projectId: string, progressReportDTO: ProgressReportDTO): Observable<ApiResult<string>>{
    return this.http.post<ApiResult<string>>(url.RegisterProgressReport + projectId , progressReportDTO);
  }

  public GetAllocationReports(projectId: string,userSupervisorAcceptedOrRejectedNameOrPhoneNumber: string,
    pageId: number,pageCount:number,activePage: number,startPage: number,endPage:number,takeEntity:number,
    skipEntity:number): Observable<ApiResult<AllocationReportPaginationSelectedDto>> {
    return this.http.get<ApiResult<AllocationReportPaginationSelectedDto>>(url.GetAllocationReports
    + '?projectId=' + projectId + '&userSupervisorAcceptedOrRejectedNameOrPhoneNumber=' + 
    userSupervisorAcceptedOrRejectedNameOrPhoneNumber + '&pageId=' + pageId + '&pageCount=' + pageCount
    + '&activePage=' + activePage + '&startPage=' + startPage + '&endPage=' + endPage + '&takeEntity=' +
    takeEntity + '&skipEntity=' + skipEntity);
  }

  public GetProgressReports(projectId: string,userSupervisorAcceptedOrRejectedNameOrPhoneNumber: string,
    pageId: number,pageCount:number,activePage: number,startPage: number,endPage:number,takeEntity:number,
    skipEntity:number): Observable<ApiResult<ProgressReportPaginationSelectedDto>> {
    return this.http.get<ApiResult<ProgressReportPaginationSelectedDto>>(url.GetProgressReports
    + '?projectId=' + projectId + '&userSupervisorAcceptedOrRejectedNameOrPhoneNumber=' + 
    userSupervisorAcceptedOrRejectedNameOrPhoneNumber + '&pageId=' + pageId + '&pageCount=' + pageCount
    + '&activePage=' + activePage + '&startPage=' + startPage + '&endPage=' + endPage + '&takeEntity=' +
    takeEntity + '&skipEntity=' + skipEntity);
  }

  public GetProgressReportsForSupervisor(projectId: string): Observable<ApiResult<ProgressReportPaginationSelectedDto>>{
    return this.http.get<ApiResult<ProgressReportPaginationSelectedDto>>(url.GetProgressReportsForSupervisor + projectId);
  }

  public GetAllocationReportsForSupervisor(projectId: string): Observable<ApiResult<AllocationReportPaginationSelectedDto>>{
    return this.http.get<ApiResult<AllocationReportPaginationSelectedDto>>(url.GetAllocationReportsForSupervisor + projectId);
  }

  public GetUsersWithDynamicFilter(): Observable<ApiResult<boolean>>{
    return this.http.get<ApiResult<boolean>>(url.GetUsersWithDynamicFilter);
  }

  // public UploadDocumentsOfProgressReport(progressReportId: string): Observable<ApiResult<any>>{
  //   return this.http.post<ApiResult<any>>(url.UploadDocumentsOfProgressReport + progressReportId,);
  // }
}
