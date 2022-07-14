import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatUsersComponent } from 'src/app/userManagement/page/chat-users/chat-users.component';
import { RoleManagementUsersComponent } from 'src/app/userManagement/page/role-management-users/role-management-users.component';
import { VeiwUserListComponent } from 'src/app/userManagement/page/veiw-user-list/veiw-user-list.component';
import {RoleManagementOrganizationComponent} from "../../userManagement/page/role-management-organization/role-management-organization.component";

const routes: Routes = [
  {path: 'userList', component: VeiwUserListComponent},
  {path: 'roleManagementUserOrganization', component: RoleManagementOrganizationComponent},
  {path: 'roleManagementUser', component: RoleManagementUsersComponent },
  {path: 'chatUsers', component: ChatUsersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
