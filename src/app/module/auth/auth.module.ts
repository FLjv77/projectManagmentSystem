import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginUserComponent } from "../../auth/page/login-user/login-user.component";
import { RegisterUserComponent } from "../../auth/page/register-user/register-user.component";
import { RegisterCompanyComponent } from "../../auth/page/register-company/register-company.component";
import { SharedModule } from "../shared/shared.module";
import {MatRadioModule} from "@angular/material/radio";


@NgModule({
  declarations: [
    LoginUserComponent,
    RegisterUserComponent,
    RegisterCompanyComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    MatRadioModule,

  ]
})
export class AuthModule { }
