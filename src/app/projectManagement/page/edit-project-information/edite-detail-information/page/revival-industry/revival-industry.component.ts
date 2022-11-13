import { ApiResult } from 'src/app/auth/model/authDTO';
import { Router } from '@angular/router';
import { CommonDataForCreateProjectService } from 'src/app/createProjectProcess/service/commonData/commonDataForCreateProject/common-data-for-create-project.service';
import { SpecializedInformationService } from 'src/app/createProjectProcess/service/specializedInformation/specialized-information.service';
import { projectType } from 'src/app/createProjectProcess/model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { RevivalIndustry, RevivalIndustrySpeceficDetailDTO } from 'src/app/createProjectProcess/model/specializedInformation/modifyRevivalIndustrySpeceficDetail';
import { FormControl } from '@angular/forms';
import { InputCustomStyle } from 'src/app/shared/page/component/input-style/input-style.component';
import { ProjectSelectedDTO } from 'src/app/projectManagement/model/project/projectDto';
import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-revival-industry',
  templateUrl: './revival-industry.component.html',
  styleUrls: ['./revival-industry.component.scss']
})
export class RevivalIndustryComponent implements OnInit {

  @Input() data: ProjectSelectedDTO;
  private projectId : string|null;
  public revivalIndustrySpeceficDetailDTO: Array<RevivalIndustry>;
  public inputCustomStyle: InputCustomStyle;
  public amountGrantedFacilities = new Array<FormControl>();
  public numberIndustries = new Array<FormControl>();
  @Output() refreshList= new EventEmitter<boolean>();
  @Input() projectIdSelect: string|string[];
  public edit: boolean;
  public typeProject: projectType;

  constructor(private router: Router,
    private commonDataForCreateProjectService: CommonDataForCreateProjectService,
    private specializedInformationService: SpecializedInformationService) {}

  ngOnInit(): void {
    this.initInputStyle();
    this.revivalIndustrySpeceficDetailDTO = new Array<RevivalIndustry>();
    this.addList();
    this.getData();
  }

  public getData(){
    if (this.data.projectSpeceficDetail.revivalIndustries.length!=0) {
      this.revivalIndustrySpeceficDetailDTO = this.data.projectSpeceficDetail.revivalIndustries;
      this.setValueInputs();
    }
    else{
      this.addList();
    }
  }

  public setValueInputs() {
    for (let i = 0; i < this.revivalIndustrySpeceficDetailDTO.length; i++) {
      this.amountGrantedFacilities.push(new FormControl());
      this.numberIndustries.push(new FormControl());

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

  public saved(){
    this.editList();
    this.edit = false;
  }

  public editForm(){
    this.edit = true;
  }

  public editList(){
    this.specializedInformationService.ModifyRevivalIndustrySpeceficDetail1(this.projectIdSelect
      ,new RevivalIndustrySpeceficDetailDTO(this.revivalIndustrySpeceficDetailDTO))
      .subscribe((res:ApiResult<RevivalIndustrySpeceficDetailDTO>)=>{
        if (res.statusCode==200 && res.isSuccess==true){
          this.revivalIndustrySpeceficDetailDTO = res.data.revivalIndustries;
          this.refreshList.emit(true);
        }
      });
  }
}
