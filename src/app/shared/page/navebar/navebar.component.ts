import { AlertDialogBySweetAlertService } from 'src/app/shared/service/alertDialog/alert-dialog-by-sweet-alert.service';
import { ReportConnectionToApiService } from './../../../managementReport/service/reportConnectionToApi/report-connection-to-api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { ApiResult } from 'src/app/auth/model/authDTO';
import { AuthService } from 'src/app/auth/service/authConnectToApi/auth.service';
import { CompanySelectedDTO } from 'src/app/workSpace/model/companyModel';
import { UserRole } from '../../model/naveBarModel';
import { HandleDisplayErrorService } from '../../service/handleError/handle-display-error.service';
import { url } from 'src/assets/url/url';
import { SidebarControleServiceService } from '../../service/sidebarControleService/sidebar-controle-service.service';

@Component({
  selector: 'app-navebar',
  templateUrl: './navebar.component.html',
  styleUrls: ['./navebar.component.scss']
})
export class NavebarComponent implements OnInit {
  public companyInformation: CompanySelectedDTO;
  public isFullScreen: boolean = false;
  public companyName: string = '';
  constructor(
    private router: Router, private reportConnectionToApiService:ReportConnectionToApiService,
    private authService: AuthService,
    private handleDisplayErrorService: HandleDisplayErrorService,
    private sidebarControleServiceService: SidebarControleServiceService,
    private alertDialogBySweetAlertService:AlertDialogBySweetAlertService
  ) { }

  ngOnInit(): void {
    this.checkCurrentUserIsSuperAdmin();
  }

  public logout() {
    localStorage.clear();
    this.router.navigate(['../../auth/loginUser']);
  }


  public openFullscreen() {
    let elem = document.getElementById("screen");

    if (elem) {
      if (!this.isFullScreen) {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        }
      }
      else {
        document.exitFullscreen();
      }
    }


    this.isFullScreen = !this.isFullScreen;
  }

  public changeUserRole(stateRole: UserRole,role: string) {
    this.authService.AmIAllowedToMakeThisClaim(role).subscribe((res: ApiResult<boolean>)=>{
      if (res.data == true) {
        this.router.navigate([url]);
        switch(stateRole) {
          case 0 : this.router.navigate(['../../dashboard/home']); break;
          case 1 : this.router.navigate(['../../dashboard/homeCompany']); break;
          case 2 : this.router.navigate(['../../dashboard/homeSupervisor']); break;
        }
      }
      else {
        this.alertDialogBySweetAlertService.showErrorAlert('شما دسترسی لازم برای این بخش را ندارید.')
      }
    });

  }

  private checkCurrentUserIsSuperAdmin(){
    this.authService.getMyCompany().subscribe((res: ApiResult<CompanySelectedDTO>) => {
      this.reportConnectionToApiService.CompanyIdForSuper.emit(res.data.companyId);
        if(res.isSuccess && res.statusCode == 200) {
        this.companyInformation = res.data;
        localStorage.removeItem(url.CompanyInfo);
        localStorage.removeItem(url.userRole);
        localStorage.setItem(url.CompanyInfo, JSON.stringify(res.data));
        localStorage.setItem(url.userRole, 'notAdmin');
        this.sidebarControleServiceService.showReport.emit(true);
        this.companyName = res.data.companyName;
        localStorage.removeItem(url.companyName);
        localStorage.setItem(url.companyName, this.companyName);
      } else {
        this.handleDisplayErrorService.showError(res.statusCode);
        localStorage.removeItem(url.CompanyInfo);
        localStorage.removeItem(url.userRole);
        localStorage.setItem(url.userRole, 'admin');
        this.companyName = 'ادمین';
      }

      console.log(this.companyName);

    }, (err: HttpErrorResponse) => {
      //this.handleDisplayErrorService.showError(err.error.StatusCode);
      this.companyName = 'ادمین';
      localStorage.removeItem(url.CompanyInfo);
      localStorage.removeItem(url.userRole);
      localStorage.setItem(url.userRole, 'admin');
    });;
  }

}

