import { CompanySelectedDTO } from './../../model/companyModel';
import { Observable } from 'rxjs';
import { url } from 'src/assets/url/url';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyListService {

  constructor(private http:HttpClient) { }

}
