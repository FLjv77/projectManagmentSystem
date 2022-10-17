import { ActivatedRoute } from '@angular/router';
import { projectType } from './../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { InputCustomStyle } from './../../../../shared/page/component/input-style/input-style.component';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RevivalIndustry, RevivalIndustrySpeceficDetailDTO } from 'src/app/createProjectProcess/model/specializedInformation/modifyRevivalIndustrySpeceficDetail';
import { SpecializedInformationService } from 'src/app/createProjectProcess/service/specializedInformation/specialized-information.service';
import { ApiResult } from '../../../../auth/model/authDTO';
import { CommonDataForCreateProjectService } from 'src/app/createProjectProcess/service/commonData/commonDataForCreateProject/common-data-for-create-project.service';
import { CompanySelectedDTO } from 'src/app/workSpace/model/companyModel';
import { url } from 'src/assets/url/url';

@Component({
  selector: 'app-revival-of-industry-information',
  templateUrl: './revival-of-industry-information.component.html',
  styleUrls: ['./revival-of-industry-information.component.scss',
  '../../project-creation-levels/project-creation-levels.component.scss',
  '../specialized-information-removal-marginalization/specialized-information-removal-marginalization.component.scss',
  '../../project-creation-levels/page/basic-project-information/basic-project-information.component.scss']
})

export class RevivalOfIndustryInformationComponent implements OnInit {
  private projectId : string|null;
  public revivalIndustrySpeceficDetailDTO: Array<RevivalIndustry> = new Array<RevivalIndustry>();
  public inputCustomStyle: InputCustomStyle;
  public amountGrantedFacilities = new Array<FormControl>();
  public numberIndustries = new Array<FormControl>();
  public typeProject: projectType;

  constructor(private router: Router,
    private commonDataForCreateProjectService: CommonDataForCreateProjectService,
    private specializedInformationService: SpecializedInformationService,
    private activeRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.initInputStyle();
    this.addList();
    this.getQuery();
    this.setCompanyId();
  }

  private getQuery(){
    this.projectId = this.activeRoute.snapshot.queryParamMap.get("projectId");
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public goOnMap() {
    this.router.navigate(['../../createProject/selectLocationOnMap']);
  }

  private companyId: string;
  private setCompanyId() {
    let com = localStorage.getItem(url.CompanyInfo);
    if(com) {
      let c = new CompanySelectedDTO();
      c = JSON.parse(com);
      this.companyId = c.companyId;
    } else {
      let idC = this.activeRoute.snapshot.queryParamMap.get('companyId');
      if(idC) this.companyId = idC;
    }
  }

  public createDetailInfo() {
    this.specializedInformationService.ModifyRevivalIndustrySpeceficDetail(
      this.projectId,
      new RevivalIndustrySpeceficDetailDTO(
        this.revivalIndustrySpeceficDetailDTO
      )
    ).subscribe((res: ApiResult<RevivalIndustrySpeceficDetailDTO>) => {
      if(res.isSuccess && res.statusCode == 200) {
        this.router.navigate(['../projectManagement/projectList'] , {queryParams: {idCompany : this.companyId}});

      }
    })
  }

  public observeChange_amountGrantedFacilities(event: string, index: number) {
    this.revivalIndustrySpeceficDetailDTO[index].amountOfFacilities = Number(event);
  }
  public observeChange_numberIndustries(event: string, index: number) {
    this.revivalIndustrySpeceficDetailDTO[index].numberOfIndustry = Number(event);
  }

  public checkValidation(): boolean {
    let res = true;
    for(let i=0; i<this.revivalIndustrySpeceficDetailDTO.length; i++) {
      if(
        this.amountGrantedFacilities[i].value &&
        this.numberIndustries[i].value) res = false;
        else {
          res = true; break;
        }
    }

    return res;
  }

  public setTypeProject(state: projectType){
    this.typeProject = state;
  }

  public addList() {
    this.numberIndustries.push(new FormControl());
    this.amountGrantedFacilities.push(new FormControl());
    this.revivalIndustrySpeceficDetailDTO.push(new RevivalIndustry());
  }

  public deleteList(index: number) {
    this.revivalIndustrySpeceficDetailDTO.splice(index, 1);
  }

}
