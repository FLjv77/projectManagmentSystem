import { sidebarState } from './../../../../model/sidebarModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-management-setting-menu',
  templateUrl: './project-management-setting-menu.component.html',
  styleUrls: ['./project-management-setting-menu.component.scss',
              '../dashbord-managment-menu/dashbord-managment-menu.component.scss']
})
export class ProjectManagementSettingMenuComponent implements OnInit {
  public state: sidebarState = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public openSubmenue(state: sidebarState){
    if (this.state != 3) {
      this.state = state;
    }
    else if (this.state == 3){
      this.state = 0;
    }
  }
}
