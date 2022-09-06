import { ProgressReportDTO } from './../../model/modelDtoAllocationReport';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { RequestAllocationReportDTO, RequestAllocationVerificationDTO } from '../../model/modelDtoAllocationReport';
import { url } from 'src/assets/url/url';

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

  // public UploadDocumentsOfProgressReport(progressReportId: string): Observable<ApiResult<any>>{
  //   return this.http.post<ApiResult<any>>(url.UploadDocumentsOfProgressReport + progressReportId,);
  // }
}
