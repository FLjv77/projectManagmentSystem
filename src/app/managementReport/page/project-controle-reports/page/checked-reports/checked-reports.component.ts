import { NumberFormaterService } from './../../../../../shared/service/number/number-formater.service';
import { Component, Input, OnInit } from '@angular/core';
import { ReportConnectionToApiService } from 'src/app/managementReport/service/reportConnectionToApi/report-connection-to-api.service';
import { AllocationReportPaginationSelectedDto, AllocationReportSelectedDto, ProgressReportPaginationSelectedDto, ProgressReportSelectedDto } from 'src/app/managementReport/model/getReports';
import { ApiResult } from 'src/app/auth/model/authDTO';

@Component({
  selector: 'app-checked-reports',
  templateUrl: './checked-reports.component.html',
  styleUrls: ['./checked-reports.component.scss', '../../project-controle-reports.component.scss'
,'../../../view-chart-progress-roport/view-chart-progress-roport.component.scss']
})
export class CheckedReportsComponent implements OnInit {

  public allocationReportSelectedDtos: AllocationReportSelectedDto[];
  public progressReportSelectedDtos:	ProgressReportSelectedDto[];
  @Input() projectId: string;

  public openCloseAnswer1:boolean = false;
  public openCloseAnswer2:boolean = false;

  constructor(private numberFormaterService:NumberFormaterService,
    private reportConnectionToApiService: ReportConnectionToApiService,
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
    this.reportConnectionToApiService.GetAllocationReportsForSupervisor(
      this.projectId
    ).subscribe((res: ApiResult<AllocationReportPaginationSelectedDto>) => {
      if(res.isSuccess && res.statusCode == 200) {
        this.allocationReportSelectedDtos = res.data.allocationReportSelectedDtos;
      }
    });
  }

  private getReportProgress() {
    this.reportConnectionToApiService.GetProgressReportsForSupervisor(
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

}
