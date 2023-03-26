import { NumberFormaterService } from './../../../../../shared/service/number/number-formater.service';
import { HandleModalService } from './../../../../../shared/service/handleModalService/handle-modal.service';
import { Component, Input, OnInit } from '@angular/core';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { AllocationReportSelectedDto, ProgressReportSelectedDto, AllocationReportPaginationSelectedDto, ProgressReportPaginationSelectedDto, MediaSelectedDTO } from 'src/app/managementReport/model/getReports';
import { ReportConnectionToApiService } from 'src/app/managementReport/service/reportConnectionToApi/report-connection-to-api.service';
import { HandleDisplayErrorService } from 'src/app/shared/service/handleError/handle-display-error.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-unreviewed-reports',
  templateUrl: './unreviewed-reports.component.html',
  styleUrls: ['./unreviewed-reports.component.scss','../../project-controle-reports.component.scss'
  ,'../../../view-chart-progress-roport/view-chart-progress-roport.component.scss']
})
export class UnreviewedReportsComponent implements OnInit {
  public allocationReportSelectedDtos: AllocationReportSelectedDto[] = [];
  public progressReportSelectedDtos:	ProgressReportSelectedDto[] = [];
  public selectedReportId: string;
  public selectedReportIndex: number;

  @Input() projectId: string;

  public openCloseAnswer1:boolean = false;
  public openCloseAnswer2:boolean = false;

  constructor(private numberFormaterService:NumberFormaterService,
    private reportConnectionToApiService: ReportConnectionToApiService,
    private handleModalService:HandleModalService,
    private handleDisplayErrorService: HandleDisplayErrorService
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
      this.projectId, 'notChecked'
    ).subscribe((res: ApiResult<AllocationReportPaginationSelectedDto>) => {
      if(res.isSuccess && res.statusCode == 200) {
        this.allocationReportSelectedDtos = res.data.allocationReportSelectedDtos;
      }
    });
  }

  private getReportProgress() {
    this.reportConnectionToApiService.GetProgressReports(
      this.projectId, 'notChecked'
    ).subscribe((res: ApiResult<ProgressReportPaginationSelectedDto>) => {
      if(res.isSuccess && res.statusCode == 200) {
        this.progressReportSelectedDtos = res.data.progressReportSelectedDtos;
      }
    });
  }

  public changeToPersian(num:string){
    return this.numberFormaterService.covertToFrNumber(num);
  }

  public openModalFinancial(reportId: string, index: number) {
    this.selectedReportId = reportId;
    this.selectedReportIndex = index;
    setTimeout(() => {
      this.handleModalService.openModal('record-financial-report');
    }, 250);
  }

  public openModalProgress(reportId: string, index: number) {
    this.selectedReportId = reportId;
    this.selectedReportIndex = index;

    setTimeout(() => {
      this.handleModalService.openModal('record-progress-report');
    }, 250);
  }

  public reportHasSave(stat: boolean, chose: number) {
    if(stat) {
      this.selectedReportId = '';
      if(chose == 0) {
        this.progressReportSelectedDtos.splice(this.selectedReportIndex, 1);
      } else{
        this.allocationReportSelectedDtos.splice(this.selectedReportIndex, 1);
      }
    }
  }

  public downloadProgressReportMedia(reportId: string) {
    this.reportConnectionToApiService.GetProgressReportMedia(
      reportId, this.projectId
    ).subscribe((res: ApiResult<MediaSelectedDTO[]>) => {
      if(res.isSuccess && res.statusCode == 200) {
        if(res.data.length > 0) {
          this.reportConnectionToApiService.DownloadFile(
            res.data[res.data.length - 1].fileId
          ).subscribe((response: any) => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(response);
            link.download = res.data[0].address;
            link.click();
            }), (error: any) => console.log('Error downloading the file'),
            () => console.info('File downloaded successfully');
        } else {
          this.handleDisplayErrorService.showInfoAlert('مستنداتی برای گزارش ثبت نشده');
        }
      } else {
        this.handleDisplayErrorService.showError(res.statusCode);
      }
    }, (err: HttpErrorResponse) => {
      this.handleDisplayErrorService.showError(err.status);
    })
  }

  downloadFile(data: any) {
    const blob = new Blob([data], { type: 'text/csv' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }

  public downloadAllocationReportMedia(reportId: string) {
    this.reportConnectionToApiService.GetAllocationRepotMedia(
      reportId, this.projectId
    ).subscribe((res: ApiResult<MediaSelectedDTO[]>) => {
      if(res.isSuccess && res.statusCode == 200) {
        if(res.data.length > 0) {
                  this.reportConnectionToApiService.DownloadFile(
          res.data[res.data.length - 1].fileId
        ).subscribe((response: any) => {
          const link = document.createElement("a");
          link.href = URL.createObjectURL(response);
          link.download = res.data[0].address;
          link.click();
          }), (error: any) => console.log('Error downloading the file'),
          () => console.info('File downloaded successfully');
        } else {
          this.handleDisplayErrorService.showInfoAlert('مستنداتی برای گزارش ثبت نشده');
        }

      } else {
        this.handleDisplayErrorService.showError(res.statusCode);
      }
    }, (err: HttpErrorResponse) => {
      this.handleDisplayErrorService.showError(err.status);
    })
  }
}
