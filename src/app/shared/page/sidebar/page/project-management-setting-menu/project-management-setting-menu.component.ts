import { Router } from '@angular/router';
import { SidebarControleServiceService } from './../../../../service/sidebarControleService/sidebar-controle-service.service';
import { sidebarState, SelectSubmenueProjectManagement } from './../../../../model/sidebarModel';
import { Component, OnInit } from '@angular/core';
import { url } from 'src/assets/url/url';

@Component({
  selector: 'app-project-management-setting-menu',
  templateUrl: './project-management-setting-menu.component.html',
  styleUrls: ['./project-management-setting-menu.component.scss',
              '../dashbord-managment-menu/dashbord-managment-menu.component.scss']
})
export class ProjectManagementSettingMenuComponent implements OnInit {

  public selectSubmenueUser: SelectSubmenueProjectManagement = 0;
  public state: sidebarState = 0;
  public showReport: boolean = false;

  constructor(private sidebarControleServiceService:SidebarControleServiceService,
              private router:Router) {
    this.sidebarControleServiceService.state.subscribe((res: sidebarState)=>{
      this.state = res;
    })
   }

  ngOnInit(): void {
  }

  public openSubmenue(state: sidebarState){
    if (this.state != 3) {
      this.sidebarControleServiceService.state.emit(state);
    }
    else if (this.state == 3){
      this.sidebarControleServiceService.state.emit(0);
    }

    let company = localStorage.getItem(url.CompanyInfo);
    if(company) {
      this.showReport = true;
    }
  }

  public setSelected(select: SelectSubmenueProjectManagement){
    this.selectSubmenueUser = select;
    if (select == 1) {
      this.router.navigate(['../../createProject/selectProjectType']);
    }
    else if (select == 2) {
      this.router.navigate(['../../projectManagement/editProject']);
    }
    else if (select == 3) {
      this.router.navigate(['../../projectManagement/projectList']);
    }
    else if (select == 4) {
      this.router.navigate(['../../managementReport/submitProgressReporter']);
    }
    else if (select == 5) {
      this.router.navigate(['../../managementReport/projectControleReports']);
    }
  }
}
