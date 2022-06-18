import { InputStyleComponent } from './../../shared/page/component/input-style/input-style.component';
import { ProgressStyleComponent } from './../../shared/page/component/progress-style/progress-style.component';
import { ButtonStyleComponent } from './../../shared/page/component/button-style/button-style.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavebarComponent } from "../../shared/page/navebar/navebar.component";
import { SidebarComponent } from "../../shared/page/sidebar/sidebar.component";
import { UserProfileImageComponent } from "../../shared/page/profileImage/user-profile-image/user-profile-image.component";
import { CurrentUserProfileImageComponent } from "../../shared/page/profileImage/current-user-profile-image/current-user-profile-image.component";
import { CurrentUserUserNameComponent } from "../../shared/page/userInformation/current-user-user-name/current-user-user-name.component";
import { GeneralBackGroundComponent } from '../../shared/page/general-back-ground/general-back-ground.component';
import {UserInformationComponent} from "../../shared/page/sidebar/page/user-information/user-information.component";
import {UserManagementSettingMenuComponent} from "../../shared/page/sidebar/page/user-management-setting-menu/user-management-setting-menu.component";
import {ProjectManagementSettingMenuComponent} from "../../shared/page/sidebar/page/project-management-setting-menu/project-management-setting-menu.component";
import {CompanyManagementSettingMenuComponent} from "../../shared/page/sidebar/page/company-management-setting-menu/company-management-setting-menu.component";
import {GalleryManagementSettingMenuComponent} from "../../shared/page/sidebar/page/gallery-management-setting-menu/gallery-management-setting-menu.component";
import {ProjectDependencyManagementSettingMenuComponent} from "../../shared/page/sidebar/page/project-dependency-management-setting-menu/project-dependency-management-setting-menu.component";
import {DashbordManagmentMenuComponent} from "../../shared/page/sidebar/page/dashbord-managment-menu/dashbord-managment-menu.component";

@NgModule({
  declarations: [
    NavebarComponent,
    SidebarComponent,
    UserProfileImageComponent,
    CurrentUserProfileImageComponent,
    CurrentUserUserNameComponent,
    GeneralBackGroundComponent,
    ButtonStyleComponent,
    ProgressStyleComponent,
    InputStyleComponent,
    UserInformationComponent,
    DashbordManagmentMenuComponent,
    UserManagementSettingMenuComponent,
    ProjectManagementSettingMenuComponent,
    CompanyManagementSettingMenuComponent,
    GalleryManagementSettingMenuComponent,
    ProjectDependencyManagementSettingMenuComponent,
  ],
  exports: [
    NavebarComponent,
    SidebarComponent,
    UserProfileImageComponent,
    CurrentUserProfileImageComponent,
    CurrentUserUserNameComponent,
    GeneralBackGroundComponent,
    ButtonStyleComponent,
    UserInformationComponent,
    DashbordManagmentMenuComponent,
    UserManagementSettingMenuComponent,
    ProjectManagementSettingMenuComponent,
    CompanyManagementSettingMenuComponent,
    GalleryManagementSettingMenuComponent,
    ProjectDependencyManagementSettingMenuComponent,

  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
