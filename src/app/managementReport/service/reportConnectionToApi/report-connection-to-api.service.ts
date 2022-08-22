import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { RequestAllocationReportDTO } from '../../model/modelDtoAllocationReport';
import { url } from 'src/assets/url/url';

@Injectable({
  providedIn: 'root'
})
export class ReportConnectionToApiService {

  constructor(private http: HttpClient) { }

  public registerAllocationReport(report: RequestAllocationReportDTO): Observable<ApiResult<string>> {
    return this.http.post<ApiResult<string>>(url.registerAllocationReport + report.projectId, report.allocationReport);
  }
}
