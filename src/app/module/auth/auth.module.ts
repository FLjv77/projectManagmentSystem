import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginUserComponent } from "../../auth/page/login-user/login-user.component";
import { RegisterUserComponent } from "../../auth/page/register-user/register-user.component";
import { RegisterCompanyComponent } from "../../auth/page/register-company/register-company.component";
import { SharedModule } from "../shared/shared.module";
import {MatRadioModule} from "@angular/material/radio";
import {SelectRoleToEntryComponent} from "../../auth/page/select-role-to-entry/select-role-to-entry.component";


@NgModule({
  declarations: [
    LoginUserComponent,
    RegisterUserComponent,
    RegisterCompanyComponent,
    SelectRoleToEntryComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    MatRadioModule,

  ]
})
export class AuthModule { }
