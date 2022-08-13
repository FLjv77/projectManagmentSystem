import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.scss', '../login-user/login-user.component.scss']
})
export class RegisterCompanyComponent implements OnInit {

  public inputCustomStyle: InputCustomStyle;
  public companyNameControl: FormControl = new FormControl();
  public companyUserNameControl: FormControl = new FormControl();
  public companyPhoneControl: FormControl = new FormControl();
  public companyNumberControl: FormControl = new FormControl();
  public passwordControl: FormControl = new FormControl();
  public repeatPasswordControl: FormControl = new FormControl();

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

  public changeLoginType(value: string) {
    setTimeout(() => {
      if (value == 'کاربر') {
        this.router.navigate(['../../auth/registerUser']);
      }
    }, 600);
  }

  public goLogin() {
    this.router.navigate(['../../auth/loginUser']);
  }

}
