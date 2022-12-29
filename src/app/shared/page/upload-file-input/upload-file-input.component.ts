import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import { ApiResult } from 'src/app/auth/model/authDTO';
import { ReportConnectionToApiService } from 'src/app/managementReport/service/reportConnectionToApi/report-connection-to-api.service';

@Component({
  selector: 'app-upload-file-input',
  templateUrl: './upload-file-input.component.html',
  styleUrls: ['./upload-file-input.component.scss']
})
export class UploadFileInputComponent implements OnInit {
  @Input() inputLabel: string;
  @Input() inputFormControl: FormControl;
  @Input() id: string;
  public fileUrl: string;
  public loading: boolean = false;
  public filePath: string;
  public file: File;

  constructor(
    private reportConnectionToApiService: ReportConnectionToApiService,
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

    this.reportConnectionToApiService.UploadDocumentsOfProgressReport(
      this.id, this.file
    ).subscribe((res: ApiResult<boolean>) => {
      console.log(res);

    });
  }

  public onUpload() {}

}
