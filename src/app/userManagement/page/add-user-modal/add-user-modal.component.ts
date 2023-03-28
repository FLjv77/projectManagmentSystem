import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { AuthService } from 'src/app/auth/service/authConnectToApi/auth.service';
import { FormControl } from '@angular/forms';
import { InputCustomStyle } from './../../../shared/page/component/input-style/input-style.component';
import { Component, OnInit } from '@angular/core';
import { HoldingUserRegisterDTO, SupervisorUserRegisterDTO } from 'src/app/auth/model/userDTO';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss']
})
export class AddUserModalComponent implements OnInit {

  public inputCustomStyle: InputCustomStyle;
  public userNameFormControl = new FormControl();
  public passwordControl = new FormControl();
  public phoneNumberControl = new FormControl();
  public repeatPasswordControl = new FormControl();
  public showSpinner: boolean;
  public check: boolean=false;

  constructor(private authService:AuthService,private Router: Router) { }

  ngOnInit(): void {
    this.initInputStyle();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  closeModal() {
    const modal = document.getElementById('add-user-modal');
    modal?.classList.add('out');
  }

  public setCheckbox(){
    this.check=!this.check;
  }

  public addUser(){
    this.showSpinner = true;
    if (this.check==false) {
      this.authService.holdingUserRegister(new HoldingUserRegisterDTO(
        this.userNameFormControl.value,
        this.phoneNumberControl.value,
        this.passwordControl.value
      )).subscribe((res: ApiResult<boolean>) => {
        this.showSpinner = false;
        this.closeModal();
      }, (err: HttpErrorResponse) => {
        this.showSpinner = false;
      });
    }
    else{
      this.authService.CreateSupervisorUser(new SupervisorUserRegisterDTO(
        this.userNameFormControl.value,
        this.phoneNumberControl.value,
        this.passwordControl.value
      )).subscribe((res: ApiResult<boolean>) => {
        this.showSpinner = false;
        this.closeModal();
      }, (err: HttpErrorResponse) => {
        this.showSpinner = false;
      });
    }
    
  }
}
