import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {InputCustomStyle} from "../../../shared/page/component/input-style/input-style.component";
import {Router} from "@angular/router";
import { AuthService } from '../../service/authConnectToApi/auth.service';
import { HoldingUserRegisterDTO } from '../../model/userDTO';
import { FormCreator } from '../../model/formCreator';
import { ApiResult, AccessToken } from '../../model/authDTO';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  public inputCustomStyle: InputCustomStyle;
  public userNameControl: FormControl = new FormControl();
  public passwordControl: FormControl = new FormControl();

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initInputStyle()
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#ffffff', '#ffffff', '#ffffff'
    )
  }

  public submitLogin() {
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
        console.log(res);
      });
  }

  private goToHomePage() {
    this.router.navigate(['../../auth/selectRoleToEntry']);
  }

  public goRegister() {
    this.router.navigate(['../../auth/registerUser']);
  }

  public checkAbelityButton(): boolean {
    return !(this.passwordControl.value) || !(this.userNameControl.value);
  }
}
