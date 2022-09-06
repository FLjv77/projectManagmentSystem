import { CompanyVerificationDTo, CompanyStatus } from './../../model/comanyModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/assets/url/url';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyVerificationDToService {

  constructor(private http: HttpClient) { }

  public CompanyModify(companyId: string,CompanyVerification: CompanyVerificationDTo): Observable<ApiResult<CompanyStatus>>{
    return this.http.post<ApiResult<CompanyStatus>>(url.CompanyModify + companyId ,CompanyVerification);
  }

}
