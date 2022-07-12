import { HandleModalService } from './../../../../../shared/service/handleModalService/handle-modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unreviewed-reports',
  templateUrl: './unreviewed-reports.component.html',
  styleUrls: ['./unreviewed-reports.component.scss','../../project-controle-reports.component.scss'
  ,'../../../view-chart-progress-roport/view-chart-progress-roport.component.scss']
})
export class UnreviewedReportsComponent implements OnInit {

  constructor(private handleModalService:HandleModalService) { }

  ngOnInit(): void {
  }

  public openModalFinancial(){
    this.handleModalService.openModal('record-financial-report');
  }

  public openModalProgress(){
    this.handleModalService.openModal('record-progress-report');
  }

}
