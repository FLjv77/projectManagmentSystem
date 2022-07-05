import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatUsersComponent } from 'src/app/userManagement/page/chat-users/chat-users.component';
import { RoleManagementUsersComponent } from 'src/app/userManagement/page/role-management-users/role-management-users.component';
import { VeiwUserListComponent } from 'src/app/userManagement/page/veiw-user-list/veiw-user-list.component';
import { ConfirmRegistredCompanyComponent } from "../../userManagement/page/confirm-registred-company/confirm-registred-company.component";

const routes: Routes = [
  {path: 'userList', component: VeiwUserListComponent  },
  {path: 'roleManagementUser', component: RoleManagementUsersComponent },
  {path: 'chatUsers', component: ChatUsersComponent },
  {path: 'confirmRegisteredCompany', component: ConfirmRegistredCompanyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
