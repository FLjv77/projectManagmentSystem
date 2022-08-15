import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {InputCustomStyle} from "../../../shared/page/component/input-style/input-style.component";
import {Router} from "@angular/router";
import { AuthService } from '../../service/authConnectToApi/auth.service';
import { HoldingUserRegisterDTO } from '../../model/userDTO';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  public inputCustomStyle: InputCustomStyle;
  public userNameControl: FormControl = new FormControl();
  public passwordControl: FormControl = new FormControl();
  public phoneNumberControl: FormControl = new FormControl();

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
    this.authService.holdingUserRegister(new HoldingUserRegisterDTO(
      this.userNameControl.value,
      this.phoneNumberControl.value,
      this.passwordControl.value
    )).subscribe((res: any) => {
      console.log(res);

    });
  }

  private goToHomePage() {
    this.router.navigate(['../../auth/selectRoleToEntry']);
  }

  public goRegister() {
    this.router.navigate(['../../auth/registerUser']);
  }
}
