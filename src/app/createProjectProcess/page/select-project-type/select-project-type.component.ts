import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DisplayPathModel} from "../../../shared/model/displayPathModel";
import { TargetsOfProjectSelectedDto } from '../../model/createProjectModel/target';
import {ProjectType} from "../../model/EnumForSpecializeInformation/EnumForSpecializeInformation";
import { CreaterojectService } from '../../service/projectCreationLevels/createroject.service';
import { ApiResult } from '../../../auth/model/authDTO';
import { HandleDisplayErrorService } from '../../../shared/service/handleError/handle-display-error.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-select-project-type',
  templateUrl: './select-project-type.component.html',
  styleUrls: ['./select-project-type.component.scss']
})
export class SelectProjectTypeComponent implements OnInit {
  private projectType: ProjectType;
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public path3: DisplayPathModel;
  public types: TargetsOfProjectSelectedDto[];
  constructor(private router: Router,
    private handleDisplayErrorService: HandleDisplayErrorService,
    private createrojectService: CreaterojectService) { }

  ngOnInit(): void {
    this.initDisplayPath();
    this.getTargets();
  }

  public goToCreateProjectSteps(type: ProjectType) {
    this.projectType = type;
    this.router.navigate(['createProject/startCreatProject'], {queryParams: {type: this.projectType}});
  }

  private getTargets() {
    this.createrojectService.getTargetsOfProject().subscribe((res: ApiResult<TargetsOfProjectSelectedDto[]>) => {
      if(res.isSuccess && res.statusCode == 200) {
        this.types = res.data;
      } else {
        this.handleDisplayErrorService.showError(res.statusCode);
      }
    }, (err: HttpErrorResponse) => {
      this.handleDisplayErrorService.showError(err.status);
    });
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('ساخت پروژه', false, '');
  }
}
