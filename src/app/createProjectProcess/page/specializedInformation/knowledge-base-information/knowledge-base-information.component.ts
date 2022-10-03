import { projectType } from './../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { Router } from '@angular/router';
import { InputCustomStyle } from './../../../../shared/page/component/input-style/input-style.component';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SpecializedInformationService } from 'src/app/createProjectProcess/service/specializedInformation/specialized-information.service';
import { KnowledgeBased, KnowledgeBasedSpeceficDetailDTO } from 'src/app/createProjectProcess/model/specializedInformation/modifyKnowledgeBasedSpeceficDetail';
import { ApiResult } from '../../../../auth/model/authDTO';
import { ConstructionTypestring } from 'src/app/createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';

@Component({
  selector: 'app-knowledge-base-information',
  templateUrl: './knowledge-base-information.component.html',
  styleUrls: ['./knowledge-base-information.component.scss','../../project-creation-levels/project-creation-levels.component.scss',
  '../specialized-information-removal-marginalization/specialized-information-removal-marginalization.component.scss',
  '../../project-creation-levels/page/basic-project-information/basic-project-information.component.scss']
})
export class KnowledgeBaseInformationComponent implements OnInit {
  public knowledgeBaseds: KnowledgeBased[];
  private projectId = 'ad48c232-5e43-ed11-beca-c55a16b26941';
  public inputCustomStyle: InputCustomStyle;
  public numberCompanyControlList = new Array<FormControl>();
  public AreaOfExpertise = new Array<FormControl>();
  public numberAmount = new Array<FormControl>();
  public loanAmount = new Array<FormControl>();
  public reasonAmount = new Array<FormControl>();
  public LocationFormControl = new Array<FormControl>();

  constructor(
    private router: Router,
    private specializedInformationService: SpecializedInformationService) {}

  ngOnInit(): void {
    this.initInputStyle();
    this.knowledgeBaseds = new Array<KnowledgeBased>();
    this.addList();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public createSpecializeInfo() {
    this.specializedInformationService.ModifyKnowledgeBasedSpeceficDetail(
      this.projectId,
      new KnowledgeBasedSpeceficDetailDTO(
        this.knowledgeBaseds
      )
    ).subscribe((res: ApiResult<KnowledgeBasedSpeceficDetailDTO>) => {

    });
  }

  public goOnMap() {
    this.router.navigate(['../../createProject/selectLocationOnMap']);
  }

  public checkValidation(): boolean {
    let res = true;
    for(let i=0; i<this.knowledgeBaseds.length; i++) {
      if(
        this.numberCompanyControlList[i].value &&
        this.AreaOfExpertise[i].value &&
        this.numberAmount[i].value &&
        this.loanAmount[i].value &&
        this.reasonAmount[i].value) res = false;
        else {
          res = true; break;
        }
    }

    return res;
  }

  public setTypeProject(state: ConstructionTypestring, index: number) {
    this.knowledgeBaseds[index].constructionType = state;
  }

  public setNumberOfCompany(event: string, index: number) {
    this.knowledgeBaseds[index].countOfCompany = Number(event);
  }
  public set_AreaOfExpertise(event: string, index: number) {
    this.knowledgeBaseds[index].areaExpert = event;
  }
  public set_numberAmount(event: string, index: number) {
    this.knowledgeBaseds[index].loansAndFacilities.count = Number(event);
  }
  public set_loanAmount(event: string, index: number) {
    this.knowledgeBaseds[index].loansAndFacilities.amount = Number(event);
  }
  public set_reasonAmount(event: string, index: number) {
    this.knowledgeBaseds[index].loansAndFacilities.description = event;
  }


  public addList() {
    this.numberCompanyControlList.push(new FormControl());
    this.AreaOfExpertise.push(new FormControl());
    this.numberAmount.push(new FormControl());
    this.loanAmount.push(new FormControl());
    this.reasonAmount.push(new FormControl());
    this.knowledgeBaseds.push(new KnowledgeBased());
  }

  public deleteList(index: number){
    this.knowledgeBaseds.splice(index, 1);
  }
}
