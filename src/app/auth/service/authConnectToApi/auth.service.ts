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

  public generateToken(loginData: FormData): Observable<ApiResult<AccessToken>> {
    const headers = new HttpHeaders({
      'Authorization': 'true',
      'Content-Type': 'multipart/form-data'
    });
    return this.http.post<ApiResult<AccessToken>>(url.auth, loginData, {headers});
  }
}
