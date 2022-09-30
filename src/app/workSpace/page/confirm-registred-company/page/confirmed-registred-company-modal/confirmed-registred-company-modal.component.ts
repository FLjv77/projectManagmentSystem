import { CompanyVerificationDToService } from './../../../../service/CompanyVerificationDTo/company-verification-dto.service';
import { CompanyStatus, CompanyVerificationDTo } from './../../../../model/comanyModel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmed-registred-company-modal',
  templateUrl: './confirmed-registred-company-modal.component.html',
  styleUrls: ['./confirmed-registred-company-modal.component.scss']
})
export class ConfirmedRegistredCompanyModalComponent implements OnInit {

  @Input() modalState: CompanyStatus;
  public companyId: string;
  public message: string = '';

  constructor(private companyVerificationService: CompanyVerificationDToService) { }

  ngOnInit(): void {
  }

  closeModal() {
    const modal = document.getElementById('confirmed-company');
    modal?.classList.add('out');
  }

  public submit(modalState: CompanyStatus){
    this.companyVerificationService.CompanyModify(this.companyId, new CompanyVerificationDTo(modalState,this.message));
  }
}