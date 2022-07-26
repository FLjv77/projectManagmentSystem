import { NgSelect2Module } from 'ng-select2';
import { DropDownRoleUserComponent } from './../../shared/page/drop-down-role-user/drop-down-role-user.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginUserComponent } from "../../auth/page/login-user/login-user.component";
import { RegisterUserComponent } from "../../auth/page/register-user/register-user.component";
import { RegisterCompanyComponent } from "../../auth/page/register-company/register-company.component";
import {MatRadioModule} from "@angular/material/radio";
import {SelectRoleToEntryComponent} from "../../auth/page/select-role-to-entry/select-role-to-entry.component";
import { UserProfileComponent } from 'src/app/auth/page/user-profile/user-profile.component';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    LoginUserComponent,
    RegisterUserComponent,
    RegisterCompanyComponent,
    SelectRoleToEntryComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatRadioModule,
    SharedModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTooltipModule,
  ]
})
export class AuthModule { }
