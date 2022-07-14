import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from "../../auth/page/login-user/login-user.component";
import { RegisterUserComponent } from "../../auth/page/register-user/register-user.component";
import { RegisterCompanyComponent } from "../../auth/page/register-company/register-company.component";
import {SelectRoleToEntryComponent} from "../../auth/page/select-role-to-entry/select-role-to-entry.component";

const routes: Routes = [
  { path: 'loginUser', component: LoginUserComponent},
  { path: 'registerUser', component: RegisterUserComponent},
  { path: 'registerCompany', component: RegisterCompanyComponent},
  { path: 'selectRoleToEntry', component: SelectRoleToEntryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
