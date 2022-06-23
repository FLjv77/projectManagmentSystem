import { SidebarControleServiceService } from './../../../../service/sidebarControleService/sidebar-controle-service.service';
import { sidebarState } from './../../../../model/sidebarModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord-managment-menu',
  templateUrl: './dashbord-managment-menu.component.html',
  styleUrls: ['./dashbord-managment-menu.component.scss']
})
export class DashbordManagmentMenuComponent implements OnInit {

  public state: sidebarState = 0;

  constructor(private sidebarControleServiceService:SidebarControleServiceService) {
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

}
