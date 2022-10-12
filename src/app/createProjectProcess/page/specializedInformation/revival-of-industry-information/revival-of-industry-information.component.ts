import { ActivatedRoute } from '@angular/router';
import { projectType } from './../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { InputCustomStyle } from './../../../../shared/page/component/input-style/input-style.component';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RevivalIndustry, RevivalIndustrySpeceficDetailDTO } from 'src/app/createProjectProcess/model/specializedInformation/modifyRevivalIndustrySpeceficDetail';
import { SpecializedInformationService } from 'src/app/createProjectProcess/service/specializedInformation/specialized-information.service';
import { ApiResult } from '../../../../auth/model/authDTO';

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
    private specializedInformationService: SpecializedInformationService,
    private activeRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.initInputStyle();
    this.addList();
    this.getQuery();
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

  public createDetailInfo() {
    this.specializedInformationService.ModifyRevivalIndustrySpeceficDetail(
      this.projectId,
      new RevivalIndustrySpeceficDetailDTO(
        this.revivalIndustrySpeceficDetailDTO
      )
    ).subscribe((res: ApiResult<RevivalIndustrySpeceficDetailDTO>) => {

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
