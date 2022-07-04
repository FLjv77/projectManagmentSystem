import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../shared/page/component/input-style/input-style.component";
import {UntypedFormControl} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss', '../login-user/login-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  public inputCustomStyle: InputCustomStyle;
  public userNameControl: UntypedFormControl = new UntypedFormControl();
  public phoneNumberControl: UntypedFormControl = new UntypedFormControl();
  public passwordControl: UntypedFormControl = new UntypedFormControl();
  public repeatPasswordControl: UntypedFormControl = new UntypedFormControl();

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
      if (value == 'شرکت') {
        this.router.navigate(['../../auth/registerCompany']);
      }
    }, 600);
  }

  public goLogin() {
    this.router.navigate(['../../auth/loginUser']);
  }

}
