import { HandleModalService } from './../../../../../../shared/service/handleModalService/handle-modal.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-financial-report-activity',
  templateUrl: './financial-report-activity.component.html',
  styleUrls: ['./financial-report-activity.component.scss']
})
export class FinancialReportActivityComponent implements OnInit {

  constructor(private handleModalService : HandleModalService) { }

  ngOnInit(): void {
  }

  public openMdalRecordFinancial(){
    this.handleModalService.openModal('record-financial-report');
  }

}
