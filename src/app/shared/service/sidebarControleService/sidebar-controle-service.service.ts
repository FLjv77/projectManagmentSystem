import { sidebarState } from './../../model/sidebarModel';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {Subject} from "rxjs";
import { url } from 'src/assets/url/url';

@Injectable({
  providedIn: 'root'
})
export class SidebarControleServiceService {
  public sideBarIsOpen = new Subject<boolean>();
  public state = new EventEmitter<sidebarState>();
  public showReport = new EventEmitter<boolean>();


  constructor(private router: Router) { }

  public logOut() {
    localStorage.removeItem(url.CompanyInfo);
    localStorage.removeItem(url.userRole);
    localStorage.removeItem(url.tokenName);
    this.router.navigate(['../../auth/loginUser']);
  }
}
