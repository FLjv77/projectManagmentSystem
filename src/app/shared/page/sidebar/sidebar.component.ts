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
  constructor( private router: Router,
               private sidebarControleService: SidebarControleServiceService) {
    this.subscribeSideBarIsOpen();
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

  public openProfile(){}
  public goSearchFillter(){
    this.router.navigate(['../../advancedSearch']);
  }
  public logout(){
    this.router.navigate(['../../auth/loginUser']);
  }
  public GoHome(){
    this.router.navigate(['../../dashboard']);
  }

}
