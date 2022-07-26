import { MatTooltipModule } from '@angular/material/tooltip';
import { DropDownProjectListComponent } from './../../shared/page/drop-down-project-list/drop-down-project-list.component';
import { AddUserModalComponent } from './../../userManagement/page/add-user-modal/add-user-modal.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { VeiwUserListComponent } from 'src/app/userManagement/page/veiw-user-list/veiw-user-list.component';
import { RoleManagementUsersComponent } from 'src/app/userManagement/page/role-management-users/role-management-users.component';
import { ChatUsersComponent } from 'src/app/userManagement/page/chat-users/chat-users.component';
import { RoleManagementOrganizationComponent} from "../../userManagement/page/role-management-organization/role-management-organization.component";


@NgModule({
  declarations: [
    VeiwUserListComponent,
    RoleManagementUsersComponent,
    ChatUsersComponent,
    AddUserModalComponent,
    RoleManagementOrganizationComponent,
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    SharedModule,
    MatTooltipModule
  ],
  exports: [
    AddUserModalComponent
  ]
})
export class UserManagementModule { }
