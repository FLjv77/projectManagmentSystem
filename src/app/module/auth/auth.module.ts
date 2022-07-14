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
import { UserProfileComponent } from 'src/app/auth/page/user-profile/user-profile.component';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    LoginUserComponent,
    RegisterUserComponent,
    RegisterCompanyComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatRadioModule,
    SharedModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTooltipModule
  ]
})
export class AuthModule { }
