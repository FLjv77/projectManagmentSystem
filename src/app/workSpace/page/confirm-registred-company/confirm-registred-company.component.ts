import { CompanyStatusstring } from './../../model/companyModel';
import { HandleModalService } from './../../../shared/service/handleModalService/handle-modal.service';
import { Component, OnInit } from '@angular/core';
import {DisplayPathModel} from "../../../shared/model/displayPathModel";
import { CompanyListService } from '../../service/companyListDTO/company-list.service';
import { CompanySelectedDTO } from '../../model/companyModel';
import { ApiResult } from 'src/app/auth/model/authDTO';

@Component({
  selector: 'app-confirm-registred-company',
  templateUrl: './confirm-registred-company.component.html',
  styleUrls: ['./confirm-registred-company.component.scss',
    '../../../../assets/style/base.scss','../../../advancedSearch/page/advanced-search-according-to-allocation/advanced-search-according-to-allocation.component.scss']
})
export class ConfirmRegistredCompanyComponent implements OnInit {

  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public modalState: CompanyStatusstring = 0;
  public list: CompanySelectedDTO[] = [];
  public companyId: string;
  
  constructor(private handleModalService:HandleModalService,
              private companyList: CompanyListService) { }

  ngOnInit(): void {
    this.initDisplayPath();
    this.CompanySelected();
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت شرکت', false, '');
    this.path2 = new DisplayPathModel('احراز شرکت', false, '');
  }

  public openModalConfirm(value: CompanyStatusstring,id: string){
    this.modalState = value;
    this.companyId = id;
    this.handleModalService.openModal('confirmed-company');
  }

  public CompanySelected(){
    this.companyList.CompanySelected(1,1).subscribe((res: ApiResult<CompanySelectedDTO[]>)=>{
      this.list = new Array<CompanySelectedDTO>;
    this.companyList.CompanySelected(
      1, 100
    ).subscribe((res: ApiResult<CompanySelectedDTO[]>) => {
      if(res.isSuccess && res.statusCode == 200) {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].companyStatus == 0) {
            this.list.push(res.data[i]);
          }
        }
        console.log(this.list);
        
        //this.compans = res.data;
      }
    });
    })
  }

  public setRefresh(event: boolean){
    if(event==true){
      this.CompanySelected();
    }
  }

}
