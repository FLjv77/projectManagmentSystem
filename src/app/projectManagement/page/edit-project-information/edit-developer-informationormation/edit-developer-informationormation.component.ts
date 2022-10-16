import { CreaterojectService } from 'src/app/createProjectProcess/service/projectCreationLevels/createroject.service';
import { AdvancedSearchConnecctToApiService } from 'src/app/advancedSearch/service/advancedSearchConnecctToApi/advanced-search-connecct-to-api.service';
import { Participant } from './../../../../createProjectProcess/model/createProjectModel/createProject';
import { ActivatedRoute } from '@angular/router';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { ProjectSelectedDTO } from 'src/app/projectManagement/model/project/projectDto';
import { ProjectConnectToApiService } from 'src/app/projectManagement/service/project/projectConnectToApi/project-connect-to-api.service';
import { Component, Input, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-edit-developer-informationormation',
  templateUrl: './edit-developer-informationormation.component.html',
  styleUrls: ['./edit-developer-informationormation.component.scss',  '../../../../createProjectProcess/page/project-creation-levels/project-creation-levels.component.scss']
})
export class EditDeveloperInformationormationComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public employerNameFormControl = new FormControl();
  public employerFirstAndLastNameFormControl = new FormControl();
  public supervisorNameFormControl = new FormControl();
  public supervisorFirstAndLastNameFormControl = new FormControl();
  public executorNameFormControl = new FormControl();
  public executorFirstAndLastNameFormControl = new FormControl();
  public contractorsNameFormControl = new FormControl();
  public ContractorsFirstAndLastNameFormControl = new FormControl();
  public consultantNameFormControl = new FormControl();
  public consultantFirstAndLastNameFormControl = new FormControl();
  public investorNameFormControl = new FormControl();
  public investorFirstAndLastNameFormControl = new FormControl();
  public employerList: Array<Participant> = [];
  public supervisorList: Array<Participant> = [];
  public executorList: Array<Participant> = [];
  public contractorsList: Array<Participant> = [];
  public consultantList: Array<Participant> = [];
  public investorList: Array<Participant> = [];
  public projectIdSelect: string | string[];
  @Input() projectId: string | string[];
  public edit:boolean=false;

  constructor(private projectConnectToApiService :ProjectConnectToApiService,
              private activeRoute:ActivatedRoute,
              private advancedSearchConnecctToApiService:AdvancedSearchConnecctToApiService,
              private createrojectService:CreaterojectService) {
                this.advancedSearchConnecctToApiService.projectIdSelected.subscribe((res: string | string[])=>{
                  this.projectIdSelect = res;
                  if (this.projectIdSelect) {
                    console.log(this.projectIdSelect);
                    this.projectConnectToApiService.getProjectGeneralPropertiesSelect(this.projectIdSelect)
                    .subscribe((res: ApiResult<ProjectSelectedDTO>)=>{
                    
                  });
                  }
                })}

  ngOnInit(): void {
    this.initInputStyle();
    this.getInfo();
  }

  public saved(){
    // this.createrojectService.CreateProject(
    //   this.companyId, this.commonDataForCreateProjectService.getCreateProject()
    // ).subscribe((res: ApiResult<string>) => {
    //   if(res.isSuccess && res.statusCode == 200) {
    //     this.openModal();
    //     console.log(res);

    //     this.projectId = res.data;
    //   }
    // }, (err: HttpErrorResponse) => {
    // });
    this.edit = false;
  }

  public editForm(){
    this.edit = true;
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  // public getQuryParam(){
  //   this.projectId = this.activeRoute.snapshot.queryParamMap.get('projectIdEdit');
  // }

  public add(list: Array<Participant>, userName:string, family:string){
    if (!this.employerList && userName != null && family != null) this.employerList = new Array<Participant>();
    let employers = new Participant(userName,family,'');
    list.push(employers);
    this.employerNameFormControl.reset();
    this.employerFirstAndLastNameFormControl.reset();
    this.supervisorNameFormControl.reset();
    this.supervisorFirstAndLastNameFormControl.reset();
    this.executorNameFormControl.reset();
    this.executorFirstAndLastNameFormControl.reset();
    this.contractorsNameFormControl.reset();
    this.ContractorsFirstAndLastNameFormControl.reset();
    this.consultantNameFormControl.reset();
    this.consultantFirstAndLastNameFormControl.reset();
    this.investorNameFormControl.reset();
    this.investorFirstAndLastNameFormControl.reset();
  }

  public getInfo(){
    if (this.projectId) {
      this.projectConnectToApiService.getProjectGeneralPropertiesSelect(this.projectId)
    .subscribe((res: ApiResult<ProjectSelectedDTO>)=>{
      for (let i = 0; i < res.data.participants.length; i++) {
        if (res.data.participants[i].tag == 'کارفرما') {
          this.employerList.push(res.data.participants[i]);
        }
        else if (res.data.participants[i].tag == 'ناظر') {
          this.supervisorList.push(res.data.participants[i]);
        }
        else if (res.data.participants[i].tag == 'مجری') {
          this.executorList.push(res.data.participants[i]);
        }
        else if (res.data.participants[i].tag == 'پیمان کار') {
          this.contractorsList.push(res.data.participants[i]);
        }
        else if (res.data.participants[i].tag == 'مشاور') {
          this.consultantList.push(res.data.participants[i]);
        }
        else if (res.data.participants[i].tag == 'سرمایه گذار') {
          this.investorList.push(res.data.participants[i]);
        }
      }
    });
    }
  }

  public remove(list : Array<Participant>, index: number){
    list.splice(index, 1);
  }


}
