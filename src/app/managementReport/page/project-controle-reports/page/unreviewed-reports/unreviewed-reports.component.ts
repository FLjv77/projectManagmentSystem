import { NumberFormaterService } from './../../../../../shared/service/number/number-formater.service';
import { HandleModalService } from './../../../../../shared/service/handleModalService/handle-modal.service';
import { Component, Input, OnInit } from '@angular/core';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { AllocationReportSelectedDto, ProgressReportSelectedDto, AllocationReportPaginationSelectedDto, ProgressReportPaginationSelectedDto } from 'src/app/managementReport/model/getReports';
import { ReportConnectionToApiService } from 'src/app/managementReport/service/reportConnectionToApi/report-connection-to-api.service';

@Component({
  selector: 'app-unreviewed-reports',
  templateUrl: './unreviewed-reports.component.html',
  styleUrls: ['./unreviewed-reports.component.scss','../../project-controle-reports.component.scss'
  ,'../../../view-chart-progress-roport/view-chart-progress-roport.component.scss']
})
export class UnreviewedReportsComponent implements OnInit {
  public allocationReportSelectedDtos: AllocationReportSelectedDto[];
  public progressReportSelectedDtos:	ProgressReportSelectedDto[];
  public selectedReportId: string;
  @Input() projectId: string;

  public openCloseAnswer1:boolean = false;
  public openCloseAnswer2:boolean = false;

  constructor(private numberFormaterService:NumberFormaterService,
    private reportConnectionToApiService: ReportConnectionToApiService,
    private handleModalService:HandleModalService,
    ) { }

  ngOnInit(): void {
    this.getReportAllocation();
    this.getReportProgress();
  }

  public openAnswer(id: number){
    const show = document.getElementById('answer'+id);
    if (show) {
      if(show.style.display == 'block'){
        show.style.display = 'none';
        if(id==1){
          this.openCloseAnswer1 = false;
        }
        else{this.openCloseAnswer2 = false}
      }
      else {
        show.style.display = 'block';
        if(id==1){
          this.openCloseAnswer1 = true;
        }
        else{this.openCloseAnswer2 = true}
      }
    }
  }

  private getReportAllocation() {
    this.reportConnectionToApiService.GetAllocationReports(
      this.projectId
    ).subscribe((res: ApiResult<AllocationReportPaginationSelectedDto>) => {
      if(res.isSuccess && res.statusCode == 200) {
        this.allocationReportSelectedDtos = res.data.allocationReportSelectedDtos;
      }
    });
  }

  private getReportProgress() {
    this.reportConnectionToApiService.GetProgressReports(
      this.projectId
    ).subscribe((res: ApiResult<ProgressReportPaginationSelectedDto>) => {
      if(res.isSuccess && res.statusCode == 200) {
        this.progressReportSelectedDtos = res.data.progressReportSelectedDtos;
      }
    });
  }

  public changeToPersian(num:string){
    return this.numberFormaterService.covertToFrNumber(num);
  }

  public openModalFinancial(reportId: string) {
    this.selectedReportId = reportId;
    setTimeout(() => {
      this.handleModalService.openModal('record-financial-report');
    }, 250);
  }

  public openModalProgress(reportId: string) {
    this.selectedReportId = reportId;
    setTimeout(() => {
      this.handleModalService.openModal('record-progress-report');
    }, 250);
  }
}
