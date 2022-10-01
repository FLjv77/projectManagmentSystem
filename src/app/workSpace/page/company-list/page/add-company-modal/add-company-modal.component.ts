import { FormControl } from '@angular/forms';
import { InputCustomStyle } from './../../../../../shared/page/component/input-style/input-style.component';
import { Component, OnInit } from '@angular/core';
import { CompanyType, CompanyUserRegisterDTO, CreateCompanyDTO } from 'src/app/auth/model/companyUserDTO';
import { AuthService } from 'src/app/auth/service/authConnectToApi/auth.service';
import { ApiResult } from 'src/app/auth/model/authDTO';

@Component({
  selector: 'app-add-company-modal',
  templateUrl: './add-company-modal.component.html',
  styleUrls: ['./add-company-modal.component.scss']
})
export class AddCompanyModalComponent implements OnInit {

  public inputCustomStyle: InputCustomStyle;
  public companyNameControl: FormControl = new FormControl();
  public companyUserNameControl: FormControl = new FormControl();
  public companyPhoneControl: FormControl = new FormControl();
  public companyNumberControl: FormControl = new FormControl();
  public passwordControl: FormControl = new FormControl();
  public repeatPasswordControl: FormControl = new FormControl();
  public companyEconomicCodeControl: FormControl = new FormControl();
  public companyType: CompanyType;
  public companyUserRegisterDTO: CompanyUserRegisterDTO;
  public createCompanyDTO: CreateCompanyDTO;
  public showError: boolean = false;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.initInputStyle();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  closeModal() {
    const modal = document.getElementById('add-company-modal');
    modal?.classList.add('out');
  }
  
  public setType(state: CompanyType){
    this.companyType = state;
  }
  
  public addCompany(){
    if (this.companyEconomicCodeControl.value!=null && this.companyNameControl.value && 
      this.companyNumberControl.value && this.companyPhoneControl && this.companyType &&
      this.companyUserNameControl.value) {
        this.authService.CreateCompanyUser( this.companyUserRegisterDTO =
          new CompanyUserRegisterDTO(this.createCompanyDTO = new CreateCompanyDTO
            (this.companyNameControl.value,this.companyNumberControl.value,
              this.companyEconomicCodeControl.value,
              [this.companyType]),
        this.companyUserNameControl.value,
        this.companyPhoneControl.value,
        this.passwordControl.value)).subscribe((res: ApiResult<boolean>) => {
          if(res.statusCode == 200 && res.isSuccess == true){
            this.closeModal();
          }
        });
    }
    else {
      this.showError = true;
    }
  }

}
