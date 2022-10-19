import { ProgressReportDTO } from './../../model/modelDtoAllocationReport';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { RequestAllocationReportDTO, RequestAllocationVerificationDTO } from '../../model/modelDtoAllocationReport';
import { url } from 'src/assets/url/url';
import { AllocationReportPaginationSelectedDto, PrepareShareLevelOfActivityDTO, ProgressReportPaginationSelectedDto, ReportVerificationDTO } from '../../model/getReports';

@Injectable({
  providedIn: 'root'
})
export class ReportConnectionToApiService {

  public CompanyIdForSuper = new EventEmitter<string|string[]>();

  constructor(private http: HttpClient) { }

  public registerAllocationReport(projectId: string,requestAllocationReportDTO: RequestAllocationReportDTO): Observable<ApiResult<string>> {
    return this.http.post<ApiResult<string>>(url.registerAllocationReport + projectId, requestAllocationReportDTO);
  }

  public allocationReportVerification(requestAllocationVerification: RequestAllocationVerificationDTO): Observable<ApiResult<boolean>> {
    return this.http.put<ApiResult<boolean>>(url.allocationReportVerification + requestAllocationVerification.allocationReportId, requestAllocationVerification.allocationVerificationDTO);
  }

  public RegisterProgressReport(projectId: string, progressReportDTO: ProgressReportDTO): Observable<ApiResult<string>>{
    return this.http.post<ApiResult<string>>(url.RegisterProgressReport + projectId , progressReportDTO);
  }

  public GetAllocationReports(projectId: string, reportStatus?: number): Observable<ApiResult<AllocationReportPaginationSelectedDto>> {
    return this.http.get<ApiResult<AllocationReportPaginationSelectedDto>>(url.GetAllocationReports
    + '?projectId=' + projectId + (reportStatus? ('&reportStatus=' + reportStatus): '') + '&activePage=1&takeEntity=100'
    );
  }

  public GetProgressReports(projectId: string, reportStatus?: number): Observable<ApiResult<ProgressReportPaginationSelectedDto>> {
    return this.http.get<ApiResult<ProgressReportPaginationSelectedDto>>(url.GetProgressReports
    + '?projectId=' + projectId + (reportStatus? ('&reportStatus=' + reportStatus): '') + '&activePage=1&takeEntity=100'
    // + '&userSupervisorAcceptedOrRejectedNameOrPhoneNumber=' +
    // userSupervisorAcceptedOrRejectedNameOrPhoneNumber + '&pageId=' + pageId + '&pageCount=' + pageCount
    // + '&activePage=' + activePage + '&startPage=' + startPage + '&endPage=' + endPage + '&takeEntity=' +
    // takeEntity + '&skipEntity=' + skipEntity
    );
  }

  public GetProgressReportsForSupervisor(projectId: string|string[]): Observable<ApiResult<ProgressReportPaginationSelectedDto>>{
    return this.http.get<ApiResult<ProgressReportPaginationSelectedDto>>(url.GetProgressReportsForSupervisor + projectId);
  }

  public GetAllocationReportsForSupervisor(projectId: string): Observable<ApiResult<AllocationReportPaginationSelectedDto>>{
    return this.http.get<ApiResult<AllocationReportPaginationSelectedDto>>(url.GetAllocationReportsForSupervisor + projectId);
  }

  public GetUsersWithDynamicFilter(): Observable<ApiResult<any>>{
    return this.http.get<ApiResult<any>>(url.GetUsersWithDynamicFilter);
  }

  public ProgressReportVerification(data: ReportVerificationDTO, allocationReportId: string): Observable<ApiResult<any>>{
    return this.http.put<ApiResult<any>>(url.ProgressReportVerification + allocationReportId, data);
  }
}
