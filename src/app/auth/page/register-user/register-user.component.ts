import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import { AuthService } from '../../service/authConnectToApi/auth.service';
import { HoldingUserRegisterDTO } from '../../model/userDTO';
import { ApiResult } from '../../model/authDTO';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss', '../login-user/login-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  public showSpinner: boolean = false;
  public inputCustomStyle: InputCustomStyle;
  public errorPhoneNumber: string;
  public userNameControl: FormControl = new FormControl();
  public phoneNumberControl: FormControl = new FormControl();
  public passwordControl: FormControl = new FormControl();
  public repeatPasswordControl: FormControl = new FormControl();

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initInputStyle();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#ffffff', '#ffffff', '#ffffff'
    )
  }

  public submitRegister() {
    this.showSpinner = true;
    this.authService.holdingUserRegister(new HoldingUserRegisterDTO(
      this.userNameControl.value,
      this.phoneNumberControl.value,
      this.passwordControl.value
    )).subscribe((res: ApiResult<boolean>) => {
      console.log(res.data);
      this.showSpinner = false;
      this.router.navigate(['../../dashboard']);
    }, (err: HttpErrorResponse) => {
      this.showSpinner = false;
    });
  }

  public changeLoginType(value: string) {
    setTimeout(() => {
      if (value == 'شرکت') {
        this.router.navigate(['../../auth/registerCompany']);
      }
    }, 600);
  }

  public goLogin() {
    this.router.navigate(['../../auth/loginUser']);
  }

  public checkAbelityButton(): boolean {
    return !(this.passwordControl.value) || !(this.userNameControl.value) || !(this.repeatPasswordControl.value) || !(this.phoneNumberControl.value) || this.showSpinner;
  }
}
