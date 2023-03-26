import { NumberFormatService } from './../../../../../../shared/service/numberFormat/number-format.service';
import { NumberFormaterService } from './../../../../../../shared/service/number/number-formater.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HandleModalService } from './../../../../../../shared/service/handleModalService/handle-modal.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ReportConnectionToApiService } from 'src/app/managementReport/service/reportConnectionToApi/report-connection-to-api.service';
import { ApiResult } from '../../../../../../auth/model/authDTO';
import { AllocationReportPaginationSelectedDto, AllocationReportSelectedDto, MediaSelectedDTO } from 'src/app/managementReport/model/getReports';
import { HandleDisplayErrorService } from 'src/app/shared/service/handleError/handle-display-error.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-financial-report-activity',
  templateUrl: './financial-report-activity.component.html',
  styleUrls: ['./financial-report-activity.component.scss']
})
export class FinancialReportActivityComponent implements OnInit {
  private projectId: string;
  public allocationReportSelectedDtos: AllocationReportSelectedDto[] = [];

  constructor(private handleModalService : HandleModalService,
              private router: Router,
              private activeRouting: ActivatedRoute,
              private reportConnectionToApiService: ReportConnectionToApiService,
              private handleDisplayErrorService: HandleDisplayErrorService,
              private numberFormaterService:NumberFormaterService,
              private numberFormatService:NumberFormatService) {}

  ngOnInit(): void {
    this.setProjectId();
    this.getReport();
  }

  public openMdalRecordFinancial() {
    this.handleModalService.openModal('record-financial-report');
  }

  public newReport() {
    this.router.navigate(['../../managementReport/submitProgressReporter'], {queryParams: { projectId: this.projectId, reportType: 2}});
  }

  public changeToPersian(num:string){
    let value = this.numberFormatService.separate(num);
    return this.numberFormaterService.covertToFrNumber(value)
  }

  private setProjectId() {
    let id = this.activeRouting.snapshot.queryParamMap.get('projectId');
    if(id) this.projectId = id;
  }

  private getReport() {
    this.reportConnectionToApiService.GetAllocationReports(
      this.projectId
    ).subscribe((res: ApiResult<AllocationReportPaginationSelectedDto>) => {
      if(res.isSuccess && res.statusCode == 200) {
        this.allocationReportSelectedDtos = res.data.allocationReportSelectedDtos;
      }
    });
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
