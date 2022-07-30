import { NumberFormaterService } from './../../../../../../shared/service/number/number-formater.service';
import { Router } from '@angular/router';
import { HandleModalService } from './../../../../../../shared/service/handleModalService/handle-modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-report-activity',
  templateUrl: './progress-report-activity.component.html',
  styleUrls: ['./progress-report-activity.component.scss']
})
export class ProgressReportActivityComponent implements OnInit {

  constructor(private handleModalService : HandleModalService,
              private router: Router,
              private numberFormaterService:NumberFormaterService) { }

  ngOnInit(): void {
  }

  public openMdalRecordProgress(){
    this.handleModalService.openModal('record-progress-report');
  }

  public newReport(){
    this.router.navigate(['../../managementReport/submitProgressReporter']);
  }

  public changeToPersian(num:string){
    return this.numberFormaterService.covertToFrNumber(num)
  }
  
}
