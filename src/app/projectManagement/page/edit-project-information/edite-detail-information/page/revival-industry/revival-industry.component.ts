import { ApiResult } from 'src/app/auth/model/authDTO';
import { Router } from '@angular/router';
import { CommonDataForCreateProjectService } from 'src/app/createProjectProcess/service/commonData/commonDataForCreateProject/common-data-for-create-project.service';
import { SpecializedInformationService } from 'src/app/createProjectProcess/service/specializedInformation/specialized-information.service';
import { projectType } from 'src/app/createProjectProcess/model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { RevivalIndustry, RevivalIndustrySpeceficDetailDTO } from 'src/app/createProjectProcess/model/specializedInformation/modifyRevivalIndustrySpeceficDetail';
import { FormControl } from '@angular/forms';
import { InputCustomStyle } from 'src/app/shared/page/component/input-style/input-style.component';
import { ProjectSelectedDTO } from 'src/app/projectManagement/model/project/projectDto';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-revival-industry',
  templateUrl: './revival-industry.component.html',
  styleUrls: ['./revival-industry.component.scss']
})
export class RevivalIndustryComponent implements OnInit {

  @Input() data: ProjectSelectedDTO;
  private projectId : string|null;
  public revivalIndustrySpeceficDetailDTO: Array<RevivalIndustry> = new Array<RevivalIndustry>();
  public inputCustomStyle: InputCustomStyle;
  public amountGrantedFacilities = new Array<FormControl>();
  public numberIndustries = new Array<FormControl>();
  public typeProject: projectType;

  constructor(private router: Router,
    private commonDataForCreateProjectService: CommonDataForCreateProjectService,
    private specializedInformationService: SpecializedInformationService) {}

  ngOnInit(): void {
    this.initInputStyle();
    this.addList();
    this.getData();
  }
  
  public getData(){
    if (this.data) {
      this.revivalIndustrySpeceficDetailDTO = this.data.projectSpeceficDetail.revivalIndustries;
      console.log(this.revivalIndustrySpeceficDetailDTO.length);
      
      this.setValueInputs();
    }
  }

  public setValueInputs() {
    for (let i = 0; i < this.revivalIndustrySpeceficDetailDTO.length; i++) {
      this.amountGrantedFacilities[i].setValue(this.revivalIndustrySpeceficDetailDTO[i].amountOfFacilities);
      this.numberIndustries[i].setValue(this.revivalIndustrySpeceficDetailDTO[i].numberOfIndustry);
    }
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
      if(res.isSuccess && res.statusCode == 200) {
        this.commonDataForCreateProjectService.selectStep.emit(6);

        setTimeout(() => {
          document.getElementById('recoveryResources')?.click();
        }, 200);
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
