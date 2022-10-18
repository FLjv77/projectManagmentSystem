import { Router } from '@angular/router';
import { SidebarControleServiceService } from './../../../../service/sidebarControleService/sidebar-controle-service.service';
import { sidebarState, SelectSubmenueGallery } from './../../../../model/sidebarModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-management-setting-menu',
  templateUrl: './gallery-management-setting-menu.component.html',
  styleUrls: ['./gallery-management-setting-menu.component.scss',
  '../dashbord-managment-menu/dashbord-managment-menu.component.scss']
})
export class GalleryManagementSettingMenuComponent implements OnInit {

  public selectSubmenueUser: SelectSubmenueGallery = 0;
  public state: sidebarState = 0;

  constructor(private sidebarControleServiceService:SidebarControleServiceService,
              private router:Router) {
    this.sidebarControleServiceService.state.subscribe((res: sidebarState)=>{
      this.state = res;
    })
   }

  ngOnInit(): void {
  }

  public openSubmenue(state: sidebarState){
    if (this.state != 6) {
      this.sidebarControleServiceService.state.emit(state);
    }
    else if (this.state == 6){
      this.sidebarControleServiceService.state.emit(0);
    }
  }

  public setSelected(select: SelectSubmenueGallery){
    this.selectSubmenueUser = select;
    if (select == 1) {
      this.router.navigate(['../../gallery']);
    }
    else if (select == 2) {
      this.router.navigate(['../../gallery/uploadNewImage']);
    }
  }

}
