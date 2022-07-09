import { Router } from '@angular/router';
import { SidebarControleServiceService } from './../../../../service/sidebarControleService/sidebar-controle-service.service';
import { sidebarState, SelectSubmenueCompanyManagement } from './../../../../model/sidebarModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-management-setting-menu',
  templateUrl: './company-management-setting-menu.component.html',
  styleUrls: ['./company-management-setting-menu.component.scss',
              '../dashbord-managment-menu/dashbord-managment-menu.component.scss']
})
export class CompanyManagementSettingMenuComponent implements OnInit {

  public selectSubmenueUser: SelectSubmenueCompanyManagement = 0;
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
    if (this.state != 4) {
      this.sidebarControleServiceService.state.emit(state);
    }
    else if (this.state == 4){
      this.sidebarControleServiceService.state.emit(0);
    }
  }

  public setSelected(select: SelectSubmenueCompanyManagement){
    this.selectSubmenueUser = select;
    if (select == 1) {
      this.router.navigate(['../../workspace/companyList']);
    }
    else if (select == 2) {
      this.router.navigate(['']);
    }
    else if (select == 3) {
      this.router.navigate(['../../workspace/confirmRegisteredCompany']);
    }
  }

}
