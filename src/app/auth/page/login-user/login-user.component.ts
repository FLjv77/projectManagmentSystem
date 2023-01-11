import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {InputCustomStyle} from "../../../shared/page/component/input-style/input-style.component";
import {Router} from "@angular/router";
import { AuthService } from '../../service/authConnectToApi/auth.service';
import { HoldingUserRegisterDTO } from '../../model/userDTO';
import { FormCreator } from '../../model/formCreator';
import { ApiResult, AccessToken } from '../../model/authDTO';
import { url } from 'src/assets/url/url';
import { HandleDisplayErrorService } from 'src/app/shared/service/handleError/handle-display-error.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertDialogBySweetAlertService } from 'src/app/shared/service/alertDialog/alert-dialog-by-sweet-alert.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  public showSpinner: boolean = false;
  public inputCustomStyle: InputCustomStyle;
  public userNameControl: FormControl = new FormControl();
  public passwordControl: FormControl = new FormControl();

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertDialogBySweetAlertService: AlertDialogBySweetAlertService,
    private handleDisplayErrorService: HandleDisplayErrorService
  ) { }

  ngOnInit(): void {
    this.checkIsLogin();
    this.initInputStyle();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#ffffff', '#ffffff', '#ffffff'
    )
  }

  private checkIsLogin() {
    let token = localStorage.getItem(url.tokenName);
    if(token) {
      this.router.navigate(['../../dashboard'])
    }
  }

  public submitLogin() {
    this.chageSpinnerState(true);
    const user = FormCreator.CreatePasswordForm(
      this.userNameControl.value,
      this.passwordControl.value);

      const loginFormData = new FormData();
      loginFormData.append('grant_type', 'password');
      loginFormData.append('username', this.userNameControl.value);
      loginFormData.append('password', this.passwordControl.value);

      this.authService.generateToken(
        loginFormData
      ).subscribe((res: ApiResult<AccessToken>) => {
        if(res.isSuccess && res.statusCode == 200) {
          this.saveTokenToLocalStorage(res.data);
          this.checkIsFirstTime()
        } else {
          this.handleDisplayErrorService.showError(res.statusCode);
        }
        this.chageSpinnerState(false);
      }, (err: HttpErrorResponse) => {
        this.handleDisplayErrorService.showError(err.error.StatusCode);
        this.chageSpinnerState(false);
      });
  }

  private checkIsFirstTime() {
    this.authService.AmIAllowedToMakeThisClaim('holdingAdmin').subscribe((res: ApiResult<boolean>)=>{
      if (res.data == true) {
        this.goToHomePage();
      }
      else {
        this.authService.AmIAllowedToMakeThisClaim('supervisor').subscribe((res: ApiResult<boolean>)=>{
          if (res.data == true) {
            this.goToHomePage();
          }
          else {
            this.authService.AmIAllowedToMakeThisClaim('companyAdmin').subscribe((res: ApiResult<boolean>)=>{
              if (res.data == true) {
                this.goToHomePage();
              }
              else {
                this.alertDialogBySweetAlertService.showErrorAlert('شرکت شما هنوز توسط مدیر تایید نشده است');
                setTimeout(() => {
                  this.logOut();
                }, 5000);
              }
            }, (err: HttpErrorResponse) => {
            });
          }
        }, (err: HttpErrorResponse) => {
        });
      }
    }, (err: HttpErrorResponse) => {
    });
  }


  public logOut() {
    localStorage.removeItem(url.CompanyInfo);
    localStorage.removeItem(url.userRole);
    localStorage.removeItem(url.tokenName);
  }

  private chageSpinnerState(state: boolean) {
    this.showSpinner = state;
  }

  private saveTokenToLocalStorage(token: AccessToken) {
    localStorage.setItem(url.tokenName, JSON.stringify(token));
  }

  private goToHomePage() {
    this.router.navigate(['../../auth/selectRoleToEntry']);
  }

  public goRegister() {
    this.router.navigate(['../../auth/registerCompany']);
  }

  public checkAbelityButton(): boolean {
    return !(this.passwordControl.value) || !(this.userNameControl.value) || this.showSpinner;
  }
}
