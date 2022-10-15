import { NumberFormaterService } from './../../../../../../shared/service/number/number-formater.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HandleModalService } from './../../../../../../shared/service/handleModalService/handle-modal.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ReportConnectionToApiService } from 'src/app/managementReport/service/reportConnectionToApi/report-connection-to-api.service';
import { ApiResult } from '../../../../../../auth/model/authDTO';
import { AllocationReportPaginationSelectedDto, AllocationReportSelectedDto } from 'src/app/managementReport/model/getReports';

@Component({
  selector: 'app-financial-report-activity',
  templateUrl: './financial-report-activity.component.html',
  styleUrls: ['./financial-report-activity.component.scss']
})
export class FinancialReportActivityComponent implements OnInit {
  private projectId: string;
  public allocationReportSelectedDtos: AllocationReportSelectedDto[];

  constructor(private handleModalService : HandleModalService,
              private router: Router,
              private activeRouting: ActivatedRoute,
              private reportConnectionToApiService: ReportConnectionToApiService,
              private numberFormaterService:NumberFormaterService) {}

  ngOnInit(): void {
    this.setProjectId();
    this.getReport();
  }

  public openMdalRecordFinancial() {
    this.handleModalService.openModal('record-financial-report');
  }

  public newReport() {
    this.router.navigate(['../../managementReport/submitProgressReporter'], {queryParams: { projectId: this.projectId}});
  }

  public changeToPersian(num:string){
    return this.numberFormaterService.covertToFrNumber(num)
  }

  private setProjectId() {
    let id = this.activeRouting.snapshot.queryParamMap.get('projectId');
    if(id) this.projectId = id;
  }

  private getReport() {
    this.reportConnectionToApiService.GetAllocationReportsForSupervisor(
      this.projectId
    ).subscribe((res: ApiResult<AllocationReportPaginationSelectedDto>) => {
    });
  }
}
