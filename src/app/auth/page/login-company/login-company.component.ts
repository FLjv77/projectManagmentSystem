import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-company',
  templateUrl: './login-company.component.html',
  styleUrls: ['./login-company.component.scss', '../login-user/login-user.component.scss']
})
export class LoginCompanyComponent implements OnInit {

  public inputCustomStyle: InputCustomStyle;
  public workSpaceNameControl: FormControl = new FormControl();
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

  public changeLoginType() {
    setTimeout(() => {
      this.router.navigate(['../loginUser']);
    }, 600);
  }

  public goRegister() {
    this.router.navigate(['../registerCompany']);
  }

}
