import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {noop} from "rxjs";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public sideBarIsCollapse: boolean = false;
  constructor( private router: Router) { }

  ngOnInit(): void {
    let collapseSideBar = document.getElementById('collapseSideBar');
    collapseSideBar ? collapseSideBar.style.right = '0' : noop();
    let expandSideBar = document.getElementById('expandSideBar');
    expandSideBar ? expandSideBar.style.right = '-400px' : noop();
  }

  public openSideBar() {
    this.sideBarIsCollapse = false;
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
    this.router.navigate(['../../auth/loginUser']);
  }
  public GoHome(){
    this.router.navigate(['../../dashboard']);
  }
}
