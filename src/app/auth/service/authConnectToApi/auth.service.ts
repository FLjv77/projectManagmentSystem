import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HoldingUserRegisterDTO } from '../../model/userDTO';
import { Observable } from 'rxjs';
import { url } from 'src/assets/url/url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public holdingUserRegister(user: HoldingUserRegisterDTO): Observable<boolean> {
    console.log(user);

      return this.http.post<boolean>(url.createHoldingUser, user);
  }

}
