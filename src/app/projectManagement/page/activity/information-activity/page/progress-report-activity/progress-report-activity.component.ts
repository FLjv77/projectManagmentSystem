import { HandleModalService } from './../../../../../../shared/service/handleModalService/handle-modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-report-activity',
  templateUrl: './progress-report-activity.component.html',
  styleUrls: ['./progress-report-activity.component.scss']
})
export class ProgressReportActivityComponent implements OnInit {

  constructor(private handleModalService : HandleModalService) { }

  ngOnInit(): void {
  }

  public openMdalRecordProgress(){
    this.handleModalService.openModal('record-progress-report');
  }
}
