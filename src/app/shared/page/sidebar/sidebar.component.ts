import { AuthService } from 'src/app/auth/service/authConnectToApi/auth.service';
import { url } from 'src/assets/url/url';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
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

  constructor( private router: Router,private authService:AuthService,
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

  private subscribeSideBarIsOpen() {
    this.sidebarControleService.sideBarIsOpen.subscribe((res: boolean) => {
      if (!res) {
        this.closeSideBar();
      }
    })
  }

  public openSideBar() {
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
    this.router.navigate(['../../dashboard/home']);
    // this.authService.roleName.subscribe((res: string)=>{
    //   console.log('jjjj');
      
    //   if (res) {
    //     if (res=='companyAdmin') {
    //       this.router.navigate(['../../dashboard/homeCompany']);
    //     }
    //     else if (res=='supervisor') {
    //       this.router.navigate(['../../dashboard/homeSupervisor']);
    //     }
    //     else if (res=='holdingAdmin') {
    //       this.router.navigate(['../../dashboard/home']);
    //     }
    //   }
    // })
    
  }

}
