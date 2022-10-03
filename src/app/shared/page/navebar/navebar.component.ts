import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ApiResult } from 'src/app/auth/model/authDTO';
import { AuthService } from 'src/app/auth/service/authConnectToApi/auth.service';
import { CompanySelectedDTO } from 'src/app/workSpace/model/companyModel';
import { UserRole } from '../../model/naveBarModel';
import { HandleDisplayErrorService } from '../../service/handleError/handle-display-error.service';
import { url } from 'src/assets/url/url';

@Component({
  selector: 'app-navebar',
  templateUrl: './navebar.component.html',
  styleUrls: ['./navebar.component.scss']
})
export class NavebarComponent implements OnInit {
  public companyInformation: CompanySelectedDTO;
  public isFullScreen: boolean = false;
  public companyName: string = 'ادمین';
  constructor(
    private router: Router,
    private authService: AuthService,
    private handleDisplayErrorService: HandleDisplayErrorService,
  ) { }

  ngOnInit(): void {
    this.checkCurrentUserIsSuperAdmin();
  }

  public logout() {
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

  public changeUserRole(stateRole: UserRole) {
    switch(stateRole) {
      case 0 : this.router.navigate(['../../dashboard/home']); break;
      case 1 : this.router.navigate(['../../dashboard/homeCompany']); break;
      case 2 : this.router.navigate(['../../dashboard/homeSupervisor']); break;
    }
  }

  private checkCurrentUserIsSuperAdmin(){
    this.authService.getMyCompany().subscribe((res: ApiResult<CompanySelectedDTO>) => {
      if(res.isSuccess && res.statusCode == 200) {
        this.companyInformation = res.data;
        localStorage.removeItem(url.CompanyInfo);
        localStorage.removeItem(url.userRole);
        localStorage.setItem(url.CompanyInfo, JSON.stringify(res.data));
        localStorage.setItem(url.userRole, 'notAdmin');
        this.companyName = res.data.companyName;
      } else {
        this.handleDisplayErrorService.showError(res.statusCode);
        localStorage.removeItem(url.CompanyInfo);
        localStorage.removeItem(url.userRole);
        localStorage.setItem(url.userRole, 'admin');
      }
    }, (err: HttpErrorResponse) => {
      //this.handleDisplayErrorService.showError(err.error.StatusCode);

      localStorage.removeItem(url.CompanyInfo);
      localStorage.removeItem(url.userRole);
      localStorage.setItem(url.userRole, 'admin');
    });;
  }

}

