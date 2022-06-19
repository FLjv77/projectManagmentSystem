import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginUserComponent } from "../../auth/page/login-user/login-user.component";
import { RegisterUserComponent } from "../../auth/page/register-user/register-user.component";
import { LoginCompanyComponent } from "../../auth/page/login-company/login-company.component";
import { RegisterCompanyComponent } from "../../auth/page/register-company/register-company.component";
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    LoginUserComponent,
    RegisterUserComponent,
    LoginCompanyComponent,
    RegisterCompanyComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
