import { url } from 'src/assets/url/url';
import { Router } from '@angular/router';
import { SidebarControleServiceService } from './../../../../service/sidebarControleService/sidebar-controle-service.service';
import { sidebarState, SelectSubmenueDashbord } from './../../../../model/sidebarModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord-managment-menu',
  templateUrl: './dashbord-managment-menu.component.html',
  styleUrls: ['./dashbord-managment-menu.component.scss']
})
export class DashbordManagmentMenuComponent implements OnInit {

  public state: sidebarState = 0;
  public selectSubmenueUser: SelectSubmenueDashbord = 0;

  constructor(private sidebarControleServiceService:SidebarControleServiceService,
              private router:Router) {
    this.sidebarControleServiceService.state.subscribe((res: sidebarState)=>{
      this.state = res;
    })
   }

  ngOnInit(): void {
  }

  public openSubmenue(state: sidebarState){
    if (this.state != 1) {
      this.sidebarControleServiceService.state.emit(state);
    }
    else if (this.state == 1){
      this.sidebarControleServiceService.state.emit(0);
    }
  }

  public setSelected(select: SelectSubmenueDashbord){
    this.selectSubmenueUser = select;
    if (select == 1) {
      this.GoHome();
    }
    else if (select == 2) {
      this.router.navigate(['']);
    }
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
