import { CompanyUserRegisterDTO } from './../../model/companyUserDTO';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HoldingUserRegisterDTO } from '../../model/userDTO';
import { Observable } from 'rxjs';
import { url } from 'src/assets/url/url';
import { ApiResult, AccessToken } from '../../model/authDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public holdingUserRegister(user: HoldingUserRegisterDTO): Observable<ApiResult<boolean>> {
    const headers = new HttpHeaders({
      'Authorization': 'true'
    });

    return this.http.post<ApiResult<boolean>>(url.createSupervisorUser, user, {headers});
  }

  public CreateCompanyUser(companyUserRegisterDTO: CompanyUserRegisterDTO): Observable<ApiResult<boolean>> {
    const headers = new HttpHeaders({
      'Authorization': 'true',
    });
    return this.http.post<ApiResult<boolean>>(url.CreateCompanyUser, companyUserRegisterDTO ,{headers});
  }

public generateToken(loginData: FormData): Observable<ApiResult<AccessToken>> {
    const headers = new HttpHeaders({
      'Authorization': 'true',
    });
    return this.http.post<ApiResult<AccessToken>>(url.auth, loginData, {headers});
  }
  public CreateProject(companyId: string): Observable<ApiResult<string>>{
    const headers = new HttpHeaders({
      'Authorization': 'true',
    });
    return this.http.post<ApiResult<string>>(url.auth + '/' + companyId , {headers});
  }
}
