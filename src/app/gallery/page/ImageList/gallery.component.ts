import { ProjectConnectToApiService } from 'src/app/projectManagement/service/project/projectConnectToApi/project-connect-to-api.service';
import { DisplayPathModel } from './../../../shared/model/displayPathModel';
import { Component, OnInit } from '@angular/core';
import { ApiResult } from '../../../auth/model/authDTO';
import { MediaSelectedDTO } from 'src/app/managementReport/model/getReports';
import { ReportConnectionToApiService } from 'src/app/managementReport/service/reportConnectionToApi/report-connection-to-api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  private projectId: string;
  public listMedia: MediaSelectedDTO[] = [];

  constructor(private projectConnectToApiService: ProjectConnectToApiService,
    private reportConnectionToApiService: ReportConnectionToApiService,
    ) { }

  ngOnInit(): void {
    this.initDisplayPath();
  }

  private getMedia() {
    this.projectConnectToApiService.GetProjectMedia(this.projectId).subscribe((res: ApiResult<MediaSelectedDTO[]>) => {
      if(res.statusCode == 200 && res.isSuccess) {
        this.listMedia = res.data;
      }
    });
  }

  public downloadFile(media: MediaSelectedDTO) {
    this.reportConnectionToApiService.DownloadFile(
      media.fileId
    ).subscribe((response: any) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(response);
      link.download = media.address;
      link.click();
      }), (error: any) => console.log('Error downloading the file'),
      () => console.info('File downloaded successfully');

  }

  public setProjectId(id: any) {
    this.projectId = id;
    this.getMedia();
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('کالری', false, '');
    this.path2 = new DisplayPathModel('مشاهده گالری', false, '');
  }

}
