import { HandleModalService } from './../../../shared/service/handleModalService/handle-modal.service';
import { Component, OnInit } from '@angular/core';
import {DisplayPathModel} from "../../../shared/model/displayPathModel";

@Component({
  selector: 'app-confirm-registred-company',
  templateUrl: './confirm-registred-company.component.html',
  styleUrls: ['./confirm-registred-company.component.scss',
    '../../../../assets/style/base.scss','../../../advancedSearch/page/advanced-search-according-to-allocation/advanced-search-according-to-allocation.component.scss']
})
export class ConfirmRegistredCompanyComponent implements OnInit {
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public modalState: boolean;
  constructor(private handleModalService:HandleModalService) { }

  ngOnInit(): void {
    this.initDisplayPath();
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت شرکت', false, '');
    this.path2 = new DisplayPathModel('احراز شرکت', false, '');
  }

  public openModalConfirm(value:boolean){
    this.modalState = value;
    this.handleModalService.openModal('confirmed-company');
  }

}
