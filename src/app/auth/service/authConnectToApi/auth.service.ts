import { ApiResult } from './../../model/authDTO';
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
    console.log(user);

      return this.http.post<ApiResult<boolean>>(url.createHoldingUser, user);
  }

  async CreateCompanyUser(companyUserRegisterDTO: CompanyUserRegisterDTO): Promise<ApiResult<boolean> | undefined> {
    const headers = new HttpHeaders({
      'handleError': JSON.stringify(companyUserRegisterDTO.handelErrorTDO)
    });
    return await this.http.post<ApiResult<boolean>>(url.CreateCompanyUser ,'' ,{headers}).toPromise();

}

public generateToken(loginData: FormData): Observable<ApiResult<AccessToken>> {
    const headers = new HttpHeaders({
      'Authorization': 'true',
      'Content-Type': 'multipart/form-data'
    });
    return this.http.post<ApiResult<AccessToken>>(url.auth, loginData, {headers});
  }
