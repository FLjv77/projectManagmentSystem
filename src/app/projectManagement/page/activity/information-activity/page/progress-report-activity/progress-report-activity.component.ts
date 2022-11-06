import { NumberFormaterService } from './../../../../../../shared/service/number/number-formater.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HandleModalService } from './../../../../../../shared/service/handleModalService/handle-modal.service';
import { Component, OnInit } from '@angular/core';
import { ReportConnectionToApiService } from 'src/app/managementReport/service/reportConnectionToApi/report-connection-to-api.service';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { ProgressReportPaginationSelectedDto, ProgressReportSelectedDto } from 'src/app/managementReport/model/getReports';

@Component({
  selector: 'app-progress-report-activity',
  templateUrl: './progress-report-activity.component.html',
  styleUrls: ['./progress-report-activity.component.scss']
})
export class ProgressReportActivityComponent implements OnInit {
  public progressReportSelected:	ProgressReportSelectedDto[];

  private projectId: string;
  constructor(private handleModalService : HandleModalService,
    private activeRouting: ActivatedRoute,
    private router: Router,
    private reportConnectionToApiService: ReportConnectionToApiService,
    private numberFormaterService:NumberFormaterService) { }

  ngOnInit(): void {
    this.setProjectId();
    this.getReport();
  }

  public openMdalRecordProgress(){
    this.handleModalService.openModal('record-progress-report');
  }

  public newReport(){
    this.router.navigate(['../../managementReport/submitProgressReporter'], {queryParams: { projectId: this.projectId, reportType: 1}});
  }

  public changeToPersian(num:string){
    return this.numberFormaterService.covertToFrNumber(num)
  }

  private setProjectId() {
    let id = this.activeRouting.snapshot.queryParamMap.get('projectId');
    if(id) this.projectId = id;
  }

  private getReport() {
    this.reportConnectionToApiService.GetProgressReports(
      this.projectId
    ).subscribe((res: ApiResult<ProgressReportPaginationSelectedDto>) => {
      if(res.isSuccess && res.statusCode == 200) {
        this.progressReportSelected = res.data.progressReportSelectedDtos;
      }
    });
  }
}
