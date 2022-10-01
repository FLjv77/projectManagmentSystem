import { CompanyVerificationDToService } from './../../../../service/CompanyVerificationDTo/company-verification-dto.service';
import { CompanyStatus, CompanyVerificationDTo } from './../../../../model/comanyModel';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiResult } from 'src/app/auth/model/authDTO';

@Component({
  selector: 'app-confirmed-registred-company-modal',
  templateUrl: './confirmed-registred-company-modal.component.html',
  styleUrls: ['./confirmed-registred-company-modal.component.scss']
})
export class ConfirmedRegistredCompanyModalComponent implements OnInit {

  @Input() modalState: CompanyStatus;
  @Input() companyId: string;
  @Output() refresh = new EventEmitter<boolean>();

  public message: string = '';

  constructor(private companyVerificationService: CompanyVerificationDToService) { }

  ngOnInit(): void {
  }

  closeModal() {
    const modal = document.getElementById('confirmed-company');
    modal?.classList.add('out');
  }

  public submit(modalState: CompanyStatus,state:boolean){
    if (modalState==1 && state==true) {
      this.companyVerificationService.CompanyModify(this.companyId, new CompanyVerificationDTo(modalState,this.message))
      .subscribe((res:ApiResult<CompanyStatus>)=>{console.log(res.data)});
      this.closeModal();
      this.refresh.emit(true);
    }
    else if(modalState==1 && state==false){
      this.closeModal();
    }
    else if (modalState==2 && state==false){
      this.closeModal();
    }
    else if(modalState==2 && state==true){
      this.companyVerificationService.CompanyModify(this.companyId, new CompanyVerificationDTo(modalState,this.message));
      this.closeModal();
      this.refresh.emit(true);
    }
  }
}