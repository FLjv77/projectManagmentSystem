import { sidebarState } from './../../../../model/sidebarModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-management-setting-menu',
  templateUrl: './company-management-setting-menu.component.html',
  styleUrls: ['./company-management-setting-menu.component.scss',
              '../dashbord-managment-menu/dashbord-managment-menu.component.scss']
})
export class CompanyManagementSettingMenuComponent implements OnInit {

  public state: sidebarState = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public openSubmenue(state: sidebarState){
    if (this.state != 4) {
      this.state = state;
    }
    else if (this.state == 4){
      this.state = 0;
    }
  }

}
