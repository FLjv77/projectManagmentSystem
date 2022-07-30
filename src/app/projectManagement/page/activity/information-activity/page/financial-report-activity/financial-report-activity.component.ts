import { NumberFormaterService } from './../../../../../../shared/service/number/number-formater.service';
import { Router } from '@angular/router';
import { HandleModalService } from './../../../../../../shared/service/handleModalService/handle-modal.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-financial-report-activity',
  templateUrl: './financial-report-activity.component.html',
  styleUrls: ['./financial-report-activity.component.scss']
})
export class FinancialReportActivityComponent implements OnInit {

  constructor(private handleModalService : HandleModalService,
              private router: Router,
              private numberFormaterService:NumberFormaterService) { }

  ngOnInit(): void {
  }

  public openMdalRecordFinancial(){
    this.handleModalService.openModal('record-financial-report');
  }

  public newReport(){
    this.router.navigate(['../../managementReport/submitProgressReporter']);
  }

  public changeToPersian(num:string){
    return this.numberFormaterService.covertToFrNumber(num)
  }

}
