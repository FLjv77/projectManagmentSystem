import { ProjectSelectedDTO } from 'src/app/projectManagement/model/project/projectDto';
import { ConstructionTypestring } from 'src/app/createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { ActivatedRoute } from '@angular/router';
import { SpecializedInformationService } from 'src/app/createProjectProcess/service/specializedInformation/specialized-information.service';
import { CommonDataForCreateProjectService } from 'src/app/createProjectProcess/service/commonData/commonDataForCreateProject/common-data-for-create-project.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { InputCustomStyle } from 'src/app/shared/page/component/input-style/input-style.component';
import { KnowledgeBased, KnowledgeBasedSpeceficDetailDTO } from 'src/app/createProjectProcess/model/specializedInformation/modifyKnowledgeBasedSpeceficDetail';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.scss']
})
export class KnowledgeBaseComponent implements OnInit {

  @Input() data: ProjectSelectedDTO;
  public knowledgeBaseds: KnowledgeBased[];
  private projectId : string|null;
  public inputCustomStyle: InputCustomStyle;
  public numberCompanyControlList = new Array<FormControl>();
  public AreaOfExpertise = new Array<FormControl>();
  public numberAmount = new Array<FormControl>();
  public loanAmount = new Array<FormControl>();
  public reasonAmount = new Array<FormControl>();
  public LocationFormControl = new Array<FormControl>();

  constructor(
    private router: Router,
    private commonDataForCreateProjectService: CommonDataForCreateProjectService,
    private specializedInformationService: SpecializedInformationService,
    private activeRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.initInputStyle();
    this.knowledgeBaseds = new Array<KnowledgeBased>();
    this.addList();
    this.getData();
    //this.getQuery();
  }

  // private getQuery(){
  //   this.projectId = this.activeRoute.snapshot.queryParamMap.get("projectId");
  // }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public getData(){
    if (this.data.projectSpeceficDetail.knowledgeBaseds) {
      console.log(this.data.projectSpeceficDetail.knowledgeBaseds);
      
      this.knowledgeBaseds = this.data.projectSpeceficDetail.knowledgeBaseds;
      for (let i = 0; i < this.knowledgeBaseds.length; i++) {
        this.numberCompanyControlList[i].setValue(this.knowledgeBaseds[i].countOfCompany);
        this.AreaOfExpertise[i].setValue(this.knowledgeBaseds[i].areaExpert);
        this.reasonAmount[i].setValue(this.knowledgeBaseds[i].loansAndFacilities.amount);
        this.numberAmount[i].setValue(this.knowledgeBaseds[i].loansAndFacilities.count);
        this.reasonAmount[i].setValue(this.knowledgeBaseds[i].loansAndFacilities.description);
      }
    }
  }

  public setValue(state: ConstructionTypestring,index:number): boolean {
    let res = false;
    if(this.knowledgeBaseds) {
      if(this.knowledgeBaseds[index].constructionType == state) res = true;
    }
    return res;
  }

  public editSpecializeInfo() {
    this.specializedInformationService.ModifyKnowledgeBasedSpeceficDetail(
      this.projectId,
      new KnowledgeBasedSpeceficDetailDTO(
        this.knowledgeBaseds
      )
    ).subscribe((res: ApiResult<KnowledgeBasedSpeceficDetailDTO>) => {
      if(res.isSuccess && res.statusCode == 200) {
        setTimeout(() => {
          document.getElementById('stackHolderInformation')?.click();
        }, 200);
      }
    });
  }

  public goOnMap() {
    this.router.navigate(['../../createProject/selectLocationOnMap']);
  }

  // public checkValidation(): boolean {
  //   let res = true;
  //   for(let i=0; i<this.knowledgeBaseds.length; i++) {
  //     if(
  //       this.numberCompanyControlList[i].value &&
  //       this.AreaOfExpertise[i].value &&
  //       this.numberAmount[i].value &&
  //       this.loanAmount[i].value &&
  //       this.reasonAmount[i].value) res = false;
  //       else {
  //         res = true; break;
  //       }
  //   }

  //   return res;
  // }

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
