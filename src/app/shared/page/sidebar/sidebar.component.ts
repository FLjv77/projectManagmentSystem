import { url } from 'src/assets/url/url';
import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import {noop} from "rxjs";
import {SidebarControleServiceService} from "../../service/sidebarControleService/sidebar-controle-service.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public sideBarIsCollapse: boolean = false;
  public showReport: boolean = false;
  public role: string|null;
  public permission : number;

  constructor( private router: Router,
               private sidebarControleServiceService: SidebarControleServiceService,
               private sidebarControleService: SidebarControleServiceService) {
    this.subscribeSideBarIsOpen();
    this.sidebarControleServiceService.showReport.subscribe((res: boolean) => {
      this.showReport = res;
    });
  }

  ngOnInit(): void {
    let collapseSideBar = document.getElementById('collapseSideBar');
    collapseSideBar ? collapseSideBar.style.right = '0' : noop();
    let expandSideBar = document.getElementById('expandSideBar');
    expandSideBar ? expandSideBar.style.right = '-400px' : noop();
  }

  public getRole(){    
    console.log(';;;');
    
    if (localStorage.getItem(url.RoleHome)!=null) {
      this.role = localStorage.getItem(url.RoleHome);
      if (this.role=='holdingAdmin') {
        localStorage.removeItem(url.RoleHome);
        localStorage.setItem(url.RoleHome,'holdingAdmin');
        this.permission=0;
      } 
      else if (this.role=='companyAdmin') {
        localStorage.removeItem(url.RoleHome);
        localStorage.setItem(url.RoleHome,'companyAdmin');
        this.permission=1;
      }
      else if (this.role=='supervisor') {
        localStorage.removeItem(url.RoleHome);
        localStorage.setItem(url.RoleHome,'supervisor');
        this.permission=2;
      }
      console.log(this.permission);
      
    }
  }

  private subscribeSideBarIsOpen() {
    this.sidebarControleService.sideBarIsOpen.subscribe((res: boolean) => {
      if (!res) {
        this.closeSideBar();
      }
    })
  }

  public openSideBar() {
    this.getRole();
    this.sideBarIsCollapse = false;
    this.sidebarControleService.sideBarIsOpen.next(true);
    let collapseSideBar = document.getElementById('collapseSideBar');
    collapseSideBar ? collapseSideBar.style.right = '-400px' : noop();
    let expandSideBar = document.getElementById('expandSideBar');
    expandSideBar ? expandSideBar.style.right = '0' : noop();
  }
  public closeSideBar() {
    this.sideBarIsCollapse = true;
    let collapseSideBar = document.getElementById('collapseSideBar');
    collapseSideBar ? collapseSideBar.style.right = '0' : noop();
    let expandSideBar = document.getElementById('expandSideBar');
    expandSideBar ? expandSideBar.style.right = '-400px' : noop();
  }

  public openProfile(){
    this.router.navigate(['../../auth/profile']);
  }
  public goSearchFillter(){
    this.router.navigate(['../../advancedSearch']);
  }
  public logout(){
    localStorage.removeItem(url.CompanyInfo);
    localStorage.removeItem(url.userRole);
    localStorage.removeItem(url.tokenName);
    this.router.navigate(['../../auth/loginUser']);
  }
  public GoHome(){
    if (localStorage.getItem(url.RoleHome) == 'supervisor') {
      this.router.navigate(['../../dashboard/homeSupervisor']);
    }
    else if (localStorage.getItem(url.RoleHome) == 'companyAdmin') {
      this.router.navigate(['../../dashboard/homeCompany']);
    }
    else if (localStorage.getItem(url.RoleHome) == 'holdingAdmin') {
      this.router.navigate(['../../dashboard/home']);
    }
  }

}
