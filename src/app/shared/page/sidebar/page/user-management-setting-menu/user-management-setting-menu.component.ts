import { sidebarState } from './../../../../model/sidebarModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management-setting-menu',
  templateUrl: './user-management-setting-menu.component.html',
  styleUrls: ['./user-management-setting-menu.component.scss',
              '../dashbord-managment-menu/dashbord-managment-menu.component.scss']
})
export class UserManagementSettingMenuComponent implements OnInit {

  public state: sidebarState = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public openSubmenue(state: sidebarState){
    if (this.state != 2) {
      this.state = state;
    }
    else if (this.state == 2){
      this.state = 0;
    }
  }
}
