import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl} from "@angular/forms";
import { ApiResult } from 'src/app/auth/model/authDTO';
import { ReportConnectionToApiService } from 'src/app/managementReport/service/reportConnectionToApi/report-connection-to-api.service';
import { HandleDisplayErrorService } from '../../service/handleError/handle-display-error.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CreaterojectService } from 'src/app/createProjectProcess/service/projectCreationLevels/createroject.service';

@Component({
  selector: 'app-upload-file-input',
  templateUrl: './upload-file-input.component.html',
  styleUrls: ['./upload-file-input.component.scss', "../../../createProjectProcess/page/project-creation-levels/page/upload-images/upload-images.component.scss"]
})
export class UploadFileInputComponent implements OnInit {
  @Input() inputLabel: string;
  @Input() inputFormControl: FormControl;
  @Input() id: string;
  @Input() uploadType: number;
  @Output() loadRequestStatus = new EventEmitter<boolean>();

  public fileUrl: string;
  public loading: boolean = false;
  public filePath: string;
  public file: File;

  constructor(
    private reportConnectionToApiService: ReportConnectionToApiService,
    private handleError: HandleDisplayErrorService,
    private createrojectService: CreaterojectService,
  ) { }

  ngOnInit(): void {
    this.initFilePath();
  }

  private initFilePath() {
    this.filePath = this.inputLabel;
  }
  async onChange(event: any) {
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.fileUrl = reader.result as string;
      this.filePath = event.target.files[0].name;
    }
    reader.readAsDataURL(this.file);

    if(this.uploadType == 1) {
      this.reportConnectionToApiService.UploadDocumentsOfProgressReport(
        this.id, this.file
        ).subscribe((res: ApiResult<boolean>) => {
          if(res.statusCode == 200 && res.isSuccess && res.data) {
            this.loadRequestStatus.emit(true);
            this.inputFormControl.reset();
            this.filePath = '';
          } else {
            this.loadRequestStatus.emit(false);
            this.handleError.showError(res.statusCode);
          }
        }, (err: HttpErrorResponse) => {
          this.handleError.showError(err.status);
        });
    } else if(this.uploadType == 2) {
      this.reportConnectionToApiService.UploadDocumentsOfAllocationReport(
        this.id, this.file
      ).subscribe((res: ApiResult<boolean>) => {
        if(res.statusCode == 200 && res.isSuccess && res.data) {
          this.loadRequestStatus.emit(true);
          this.inputFormControl.reset();
          this.filePath = '';
        } else {
          this.loadRequestStatus.emit(false);
          this.handleError.showError(res.statusCode);
        }
      }, (err: HttpErrorResponse) => {
        this.handleError.showError(err.status);
      });
    } else {
      this.createrojectService.UploadDocumentsOfProject(
        this.id, this.file
      ).subscribe((res: ApiResult<boolean>) => {
        if(res.statusCode == 200 && res.isSuccess && res.data) {
          this.loadRequestStatus.emit(true);

        } else {
          this.loadRequestStatus.emit(false);
          this.handleError.showError(res.statusCode);
        }
      }, (err: HttpErrorResponse) => {
        this.handleError.showError(err.status);
      });
    }

  }

  public onUpload() {}

}
