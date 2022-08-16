import { ApiResult } from './../../model/authDTO';
import { AuthService } from 'src/app/auth/service/authConnectToApi/auth.service';
import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import { CompanyType, CompanyUserRegisterDTO, CreateCompanyDTO } from '../../model/companyUserDTO';

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
  public companyEconomicCodeControl: FormControl = new FormControl();

  public companyUserRegisterDTO: CompanyUserRegisterDTO;
  public createCompanyDTO: CreateCompanyDTO;
  public companyType: CompanyType;

  constructor(
    private router: Router,
    private authService: AuthService,
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

  public registerCompany(){
    this.authService.CreateCompanyUser(
      this.companyUserRegisterDTO = new CompanyUserRegisterDTO(this.createCompanyDTO = new CreateCompanyDTO(this.companyNameControl.value,this.companyNumberControl.value,this.companyEconomicCodeControl.value,this.companyType),
      this.companyUserNameControl.value,
      this.companyPhoneControl.value,
      this.passwordControl.value)).then((res : ApiResult<boolean> | undefined)=>{
        console.log(res != undefined && res.statusCode);
        if(res != undefined && res.statusCode == 405 && res.isSuccess == true){
          
          this.goLogin();
        }
      });
 }

  public setType(state: CompanyType){
    this.companyType = state;
  }

}
