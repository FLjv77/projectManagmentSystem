import { SupervisorUserRegisterDTO } from './../../model/userDTO';
import { CompanySelectedDTO } from './../../../workSpace/model/companyModel';
import { CompanyUserRegisterDTO } from './../../model/companyUserDTO';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { HoldingUserRegisterDTO } from '../../model/userDTO';
import { Observable } from 'rxjs';
import { url } from 'src/assets/url/url';
import { ApiResult, AccessToken } from '../../model/authDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public roleName = new EventEmitter<string>();

  constructor(private http: HttpClient) { }

  public CreateSupervisorUser(user: SupervisorUserRegisterDTO): Observable<ApiResult<boolean>> {
    const headers = new HttpHeaders({
      'Authorization': 'true'
    });

    return this.http.post<ApiResult<boolean>>(url.createSupervisorUser, user, {headers});
  }

  public holdingUserRegister(user: HoldingUserRegisterDTO): Observable<ApiResult<boolean>> {
    const headers = new HttpHeaders({
      'Authorization': 'true'
    });

    return this.http.post<ApiResult<boolean>>(url.createHoldingUser, user, {headers});
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

public getMyCompany(): Observable<ApiResult<CompanySelectedDTO>> {
  return this.http.get<ApiResult<CompanySelectedDTO>>(url.GetMyCompany);
}

public AmIAllowedToMakeThisClaim(roleClaim: string): Observable<ApiResult<boolean>> {
  return this.http.get<ApiResult<boolean>>(url.AmIAllowedToMakeThisClaim + roleClaim);
}
}


