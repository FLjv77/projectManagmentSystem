import { Router } from '@angular/router';
import { SidebarControleServiceService } from './../../../../service/sidebarControleService/sidebar-controle-service.service';
import { sidebarState, SelectSubmenueUserManagement } from './../../../../model/sidebarModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management-setting-menu',
  templateUrl: './user-management-setting-menu.component.html',
  styleUrls: ['./user-management-setting-menu.component.scss',
              '../dashbord-managment-menu/dashbord-managment-menu.component.scss']
})
export class UserManagementSettingMenuComponent implements OnInit {

  public state: sidebarState = 0;
  public selectSubmenueUser: SelectSubmenueUserManagement = 0;

  constructor(private sidebarControleServiceService:SidebarControleServiceService,
              private router:Router) {
    this.sidebarControleServiceService.state.subscribe((res: sidebarState)=>{
      this.state = res;
    })
   }

  ngOnInit(): void {
  }

  public openSubmenue(state: sidebarState){
    if (this.state != 2) {
      this.sidebarControleServiceService.state.emit(state);
    }
    else if (this.state == 2){
      this.sidebarControleServiceService.state.emit(0);
    }
  }

  public setSelected(select: SelectSubmenueUserManagement){
    this.selectSubmenueUser = select;
    if (select == 1) {
      this.router.navigate(['../../userManagement/userList']);
    }
    else if (select == 2) {
      this.router.navigate(['../../userManagement/roleManagementUser']);
    }
    else if (select == 3) {
      this.router.navigate(['../../userManagement/chatUsers']);
    }
    else if (select == 4) {
      this.router.navigate(['../../userManagement/roleManagementUserOrganization']);
    }
  }

}
