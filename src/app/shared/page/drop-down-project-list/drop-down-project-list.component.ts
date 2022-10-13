import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Select2OptionData} from "ng-select2";
import { ApiResult } from 'src/app/auth/model/authDTO';
import { GetProjectsGeneralInfoOfCompanyDto, ProjectSelectedDTO } from 'src/app/projectManagement/model/project/projectDto';
import { ProjectConnectToApiService } from 'src/app/projectManagement/service/project/projectConnectToApi/project-connect-to-api.service';
import { CompanySelectedDTO } from 'src/app/workSpace/model/companyModel';
import { url } from 'src/assets/url/url';

@Component({
  selector: 'app-drop-down-project-list',
  templateUrl: './drop-down-project-list.component.html',
  styleUrls: ['./drop-down-project-list.component.scss']
})
export class DropDownProjectListComponent implements OnInit {

  @Input() placeholder: string;
  @Input() companyId: string| string[];
  @Output() parentid = new EventEmitter<string>();

  public title: string = 'انتخاب پروژه';
  public projectData: Array<Select2OptionData>;
  public placeHolder: Select2OptionData;

  constructor(
    private projectConnectToApiService: ProjectConnectToApiService,
  ) { }

  ngOnInit(): void {
    this.initProjectList();
    this.getProjectList();
  }

  public setParentId(id: any) {
    this.parentid.emit(id);
  }

  private getProjectList() {
    if(!this.companyId) {
      let company = localStorage.getItem(url.CompanyInfo);
      if(company) {
        let c = new CompanySelectedDTO();
        c = JSON.parse(company);
        this.companyId = c.companyId;
      }
    }

    if(this.companyId) {
      this.projectConnectToApiService.getProjectsGeneralInfoOfCompany(
        new GetProjectsGeneralInfoOfCompanyDto(
          this.companyId, 1
        )).subscribe((res: ApiResult<ProjectSelectedDTO[]>) => {
        if(res.isSuccess && res.statusCode == 200) {
          for(let i=0; i<res.data.length; i++) {
            let obj = {
              text: res.data[i].projectName,
              id: res.data[i].projectId
            }
            this.projectData.push(obj);
          }

        } else {

        }

      }, (err: HttpErrorResponse) => {

      });
    }

  }

  public setProject(name: string){
    this.title = name;
  }

  private initProjectList() {
    this.placeHolder = {
      text: 'انتخاب پروژه',
      id: 'none'
    }

    this.projectData = [];

  }
}
