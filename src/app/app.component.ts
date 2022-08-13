import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {SidebarControleServiceService} from "./shared/service/sidebarControleService/sidebar-controle-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private sideBarIsOpen: boolean;
  constructor(private router: Router,
              private sidebarControleService: SidebarControleServiceService) {
    this.subscribeSideBarIsOpen();
  }

  public checkShowNavAndSideBar(): boolean {
   return location.href.indexOf('auth/loginUser') == -1 &&
     location.href.indexOf('auth/registerUser') == -1 &&
     location.href.indexOf('auth/selectRoleToEntry') == -1 &&
     location.href.indexOf('auth/registerCompany') == -1 ;
  }

  private subscribeSideBarIsOpen() {
    this.sidebarControleService.sideBarIsOpen.subscribe((res: boolean) => {
      this.sideBarIsOpen = res;
    });
  }
  public closeSideBarOnClickOutSide(event: any) {
    if (window.innerWidth - event.clientX > 290 && this.sideBarIsOpen) {
      this.sidebarControleService.sideBarIsOpen.next(false);
    }
  }
}
