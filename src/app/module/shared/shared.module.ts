import { DropDownUserListComponent } from './../../shared/page/drop-down-user-list/drop-down-user-list.component';
import { DropDownRegionListComponent } from './../../shared/page/drop-down-region-list/drop-down-region-list.component';
import { DropDownRoleUserComponent } from './../../shared/page/drop-down-role-user/drop-down-role-user.component';
import { DropDownActivitiesComponent } from './../../shared/page/drop-down-activities/drop-down-activities.component';
import { DropDownVillageListComponent } from './../../shared/page/drop-down-village-list/drop-down-village-list.component';
import { DropDownProvinceListComponent } from './../../shared/page/drop-down-province-list/drop-down-province-list.component';
import { DropDownCityListComponent } from './../../shared/page/drop-down-city-list/drop-down-city-list.component';
import { DropDownContributorsComponent } from './../../shared/page/drop-down-contributors/drop-down-contributors.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { DropDownProjectListComponent } from './../../shared/page/drop-down-project-list/drop-down-project-list.component';
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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BooleanCustomToggleComponent} from "../../shared/page/component/boolean-custom-toggle/boolean-custom-toggle.component";
import {DatePickerJalalyComponent} from "../../shared/page/component/date-picker-jalaly/date-picker-jalaly.component";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {
  MaterialPersianDateAdapter,
  PERSIAN_DATE_FORMATS
} from "../../shared/service/jalalyDatePiker/material.persian-date.adapter";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {DisplayUserPathComponent} from "../../shared/page/display-user-path/display-user-path.component";
import {DropDownCompanyListComponent} from "../../shared/page/drop-down-company-list/drop-down-company-list.component";
import { NgSelect2Module } from 'ng-select2';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CompanyProfileModalComponent } from 'src/app/shared/page/company-profile-modal/company-profile-modal.component';
import { UploadFileInputComponent } from 'src/app/shared/page/upload-file-input/upload-file-input.component';
import { EmptyResultComponent } from '../../shared/page/empty-result/empty-result.component';

@NgModule({
  declarations: [
    EmptyResultComponent,
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
    BooleanCustomToggleComponent,
    DatePickerJalalyComponent,
    DisplayUserPathComponent,
    DropDownProjectListComponent,
    DropDownCompanyListComponent,
    UploadFileInputComponent,
    CompanyProfileModalComponent,
    DropDownContributorsComponent,
    DropDownProvinceListComponent,
    DropDownCityListComponent,
    DropDownVillageListComponent,
    DropDownActivitiesComponent,
    DropDownRoleUserComponent,
    DropDownCompanyListComponent,
    DropDownRegionListComponent,
    DropDownUserListComponent
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
      InputStyleComponent,
      BooleanCustomToggleComponent,
      DatePickerJalalyComponent,
      DisplayUserPathComponent,
      DropDownProjectListComponent,
      CompanyProfileModalComponent,
      UploadFileInputComponent,
      DropDownContributorsComponent,
      DropDownProvinceListComponent,
      DropDownCityListComponent,
      DropDownVillageListComponent,
      DropDownActivitiesComponent,
      DropDownRoleUserComponent,
      DropDownCompanyListComponent,
      EmptyResultComponent,
      DropDownRegionListComponent,
      DropDownUserListComponent
    ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    NgSelect2Module,
    MatTooltipModule,
    MatRadioModule
  ],
  providers: [
    { provide: DateAdapter, useClass: MaterialPersianDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS }
  ]
})
export class SharedModule { }
