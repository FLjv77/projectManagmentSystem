import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {InputCustomStyle} from "../../../shared/page/component/input-style/input-style.component";
import {Router} from "@angular/router";

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
    private router: Router
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
    this.router.navigate(['../../auth/selectRoleToEntry']);
  }

  public goRegister() {
    this.router.navigate(['../../auth/registerUser']);
  }
}
