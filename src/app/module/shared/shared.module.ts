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
    InputStyleComponent
  ],
  exports: [
    NavebarComponent,
    SidebarComponent,
    UserProfileImageComponent,
    CurrentUserProfileImageComponent,
    CurrentUserUserNameComponent,
    GeneralBackGroundComponent,
    ButtonStyleComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
