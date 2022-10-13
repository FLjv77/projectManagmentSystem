import { Component, OnInit, AfterViewInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DisplayPathModel} from "../../../shared/model/displayPathModel";
import { TargetsOfProjectSelectedDto } from '../../model/createProjectModel/target';
import {ProjectType} from "../../model/EnumForSpecializeInformation/EnumForSpecializeInformation";
import { CreaterojectService } from '../../service/projectCreationLevels/createroject.service';
import { ApiResult } from '../../../auth/model/authDTO';
import { HandleDisplayErrorService } from '../../../shared/service/handleError/handle-display-error.service';
import { HttpErrorResponse } from '@angular/common/http';
import { url } from 'src/assets/url/url';
import { CompanySelectedDTO } from 'src/app/workSpace/model/companyModel';

@Component({
  selector: 'app-select-project-type',
  templateUrl: './select-project-type.component.html',
  styleUrls: ['./select-project-type.component.scss']
})
export class SelectProjectTypeComponent implements OnInit, AfterViewInit {
  private projectType: ProjectType;
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public path3: DisplayPathModel;
  public companyId: string | string[];
  public types: TargetsOfProjectSelectedDto[];
  constructor(private router: Router,
    private handleDisplayErrorService: HandleDisplayErrorService,
    private createrojectService: CreaterojectService) { }

  ngAfterViewInit(): void {
    this.getTargets();
  }

  ngOnInit(): void {
    this.initDisplayPath();
    this.setCompanyId();
  }

  private setCompanyId() {
    let com = localStorage.getItem(url.CompanyInfo);
    if(com) {
      let c = new CompanySelectedDTO();
      c = JSON.parse(com);
      this.companyId = c.companyId;
    }
  }

  public goToCreateProjectSteps(type: ProjectType, name: string) {
    this.projectType = type;
    this.router.navigate(['createProject/startCreatProject'], {queryParams: {type: this.projectType, targetId: this.getIdTarget(name), companyId: this.companyId}});
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

  private getIdTarget(projectType: string): string {
    let res = '';
    if(this.types) {
      this.types.find((type: TargetsOfProjectSelectedDto) => {
      if(type.objectiveTitle == projectType) {
        res = type.targetId;
      }});
    }
    return res;
  }

  public saveSelectedCompanyId(companyId: string | string[]) {
    this.companyId = companyId;
    
  }
}
