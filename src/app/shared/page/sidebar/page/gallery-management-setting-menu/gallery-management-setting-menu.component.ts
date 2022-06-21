import { sidebarState } from './../../../../model/sidebarModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-management-setting-menu',
  templateUrl: './gallery-management-setting-menu.component.html',
  styleUrls: ['./gallery-management-setting-menu.component.scss',
  '../dashbord-managment-menu/dashbord-managment-menu.component.scss']
})
export class GalleryManagementSettingMenuComponent implements OnInit {

  public state: sidebarState = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public openSubmenue(state: sidebarState){
    if (this.state != 6) {
      this.state = state;
    }
    else if (this.state == 6){
      this.state = 0;
    }
  }

}
