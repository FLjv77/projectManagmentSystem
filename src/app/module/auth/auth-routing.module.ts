import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from "../../auth/page/login-user/login-user.component";
import { RegisterUserComponent } from "../../auth/page/register-user/register-user.component";
import { LoginCompanyComponent } from "../../auth/page/login-company/login-company.component";
import { RegisterCompanyComponent } from "../../auth/page/register-company/register-company.component";

const routes: Routes = [
  { path: 'loginUser', component: LoginUserComponent},
  { path: 'registerUser', component: RegisterUserComponent},
  { path: 'loginCompany', component: LoginCompanyComponent},
  { path: 'registerCompany', component: RegisterCompanyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
