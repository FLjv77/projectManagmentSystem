import { SidebarControleServiceService } from './../../../../service/sidebarControleService/sidebar-controle-service.service';
import { sidebarState } from './../../../../model/sidebarModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-dependency-management-setting-menu',
  templateUrl: './project-dependency-management-setting-menu.component.html',
  styleUrls: ['./project-dependency-management-setting-menu.component.scss',
              '../dashbord-managment-menu/dashbord-managment-menu.component.scss']
})
export class ProjectDependencyManagementSettingMenuComponent implements OnInit {

  public state: sidebarState = 0;

  constructor(private sidebarControleServiceService:SidebarControleServiceService) {
    this.sidebarControleServiceService.state.subscribe((res: sidebarState)=>{
      this.state = res;
    })
   }

  ngOnInit(): void {
  }

  public openSubmenue(state: sidebarState){
    if (this.state != 5) {
      this.sidebarControleServiceService.state.emit(state);
    }
    else if (this.state == 5){
      this.sidebarControleServiceService.state.emit(0);
    }
  }

}
