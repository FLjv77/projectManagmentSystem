import { SupervisorSelectedDTO } from './../../../../auth/model/userDTO';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertDialogBySweetAlertService } from 'src/app/shared/service/alertDialog/alert-dialog-by-sweet-alert.service';
import { HandleDisplayErrorService } from 'src/app/shared/service/handleError/handle-display-error.service';
import { threadId } from 'worker_threads';
import { CreaterojectService } from 'src/app/createProjectProcess/service/projectCreationLevels/createroject.service';
import { AdvancedSearchConnecctToApiService } from 'src/app/advancedSearch/service/advancedSearchConnecctToApi/advanced-search-connecct-to-api.service';
import { Participant } from './../../../../createProjectProcess/model/createProjectModel/createProject';
import { ActivatedRoute } from '@angular/router';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { ProjectSelectedDTO, UpdateProjectDTO } from 'src/app/projectManagement/model/project/projectDto';
import { ProjectConnectToApiService } from 'src/app/projectManagement/service/project/projectConnectToApi/project-connect-to-api.service';
import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import {InputCustomStyle} from "../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-edit-developer-informationormation',
  templateUrl: './edit-developer-informationormation.component.html',
  styleUrls: ['./edit-developer-informationormation.component.scss',  '../../../../createProjectProcess/page/project-creation-levels/project-creation-levels.component.scss']
})
export class EditDeveloperInformationormationComponent implements OnInit, AfterViewInit {
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
  public supervisorName: string;

  public city:string;
  public country: string;
  public state: string;
  public section: string;
  public region: string;

  constructor(private projectConnectToApiService :ProjectConnectToApiService,
              private activeRoute:ActivatedRoute,
              private advancedSearchConnecctToApiService:AdvancedSearchConnecctToApiService,
              private createrojectService:CreaterojectService,
              private handleError: HandleDisplayErrorService,
              private alertDialogBySweetAlertService:AlertDialogBySweetAlertService) {}

  ngOnInit(): void {
    this.initInputStyle();
    this.getInfo();
  }

  ngAfterViewInit(): void {
    this.advancedSearchConnecctToApiService.projectIdSelected.subscribe((res: string | string[])=>{
      this.projectIdSelect = res;
      if (this.projectIdSelect) {
        console.log('1111');
        
        this.projectConnectToApiService.getProjectGeneralPropertiesSelect(this.projectIdSelect)
        .subscribe((res: ApiResult<ProjectSelectedDTO>)=>{
          console.log(res.data.participants);
          if (res) {
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
          }

      });
      console.log('22222');
      
      this.createrojectService.GetProjectSupervisor(this.projectIdSelect).subscribe((res:ApiResult<SupervisorSelectedDTO>)=>{
        console.log('33333');
        
          this.supervisorFirstAndLastNameFormControl.setValue(res.data.userName);
      })
      }
    })
  }

  public saved(){

    let participants : Array<Participant> = new Array<Participant>;
    let updateProjectDTO = new UpdateProjectDTO();
    for (let i = 0; i < this.employerList.length; i++) {
      participants.push(this.employerList[i]);
    }
    for (let i = 0; i < this.investorList.length; i++) {
      participants.push(this.investorList[i]);
    }
    for (let i = 0; i < this.consultantList.length; i++) {
      participants.push(this.consultantList[i]);
    }
    for (let i = 0; i < this.contractorsList.length; i++) {
      participants.push(this.contractorsList[i]);
    }
    for (let i = 0; i < this.executorList.length; i++) {
      participants.push(this.executorList[i]);
    }
    // for (let i = 0; i < this.supervisorList.length; i++) {
    //   participants.push(this.supervisorList[i]);
    // }
    //updateProjectDTO.participants = participants;
    updateProjectDTO.city = this.city;
    updateProjectDTO.country = this.country;
    updateProjectDTO.region = this.region;
    updateProjectDTO.section = this.section;
    updateProjectDTO.state = this.state;
    console.log(participants);
    this.projectConnectToApiService.ModifyProjectGeneralInfo(this.projectId,updateProjectDTO).subscribe((
      res:ApiResult<boolean>)=>{
        if(res.statusCode == 200 && res.isSuccess) {
          this.alertDialogBySweetAlertService.showSuccessAlert('با موفقیت ویرایش شد');
        } else {
          this.handleError.showError(res.statusCode);
        }
    },(err: HttpErrorResponse) => {
      this.handleError.showError(err.status);
    });
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

  public add(list: Array<Participant>, userName:string, family:string,role: string){
    if (!this.employerList && userName != null && family != null) this.employerList = new Array<Participant>();
    let employers = new Participant(role,userName,family);
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
      this.city = res.data.address.city;
      this.country = res.data.address.country;
      this.region = res.data.address.region;
      this.section = res.data.address.section;
      this.state = res.data.address.state;
      this.employerList = [];
      this.supervisorList = [];
      this.executorList = [];
      this.contractorsList = [];
      this.consultantList = [];
      this.investorList = [];
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

    this.createrojectService.GetProjectSupervisor(this.projectId).subscribe((res:ApiResult<SupervisorSelectedDTO>)=>{
      if(res.isSuccess == true&& res.statusCode==200){
        this.supervisorFirstAndLastNameFormControl.setValue(res.data.userName);
      }
    })
    }
  }

  public remove(list : Array<Participant>, index: number){
    list.splice(index, 1);
  }

  public setSupervisor(supervisorName: string){
    this.createrojectService.AssigneUserAsProjectSupervisor(this.projectId,supervisorName).subscribe((res:ApiResult<boolean>)=>{
      console.log(res.data);
      if(res.statusCode == 200 && res.isSuccess) {
        this.alertDialogBySweetAlertService.showSuccessAlert('با موفقیت ویرایش شد');
      }
  },(err: HttpErrorResponse) => {
    if (err.status==500) {
      this.alertDialogBySweetAlertService.showErrorAlert('کاربر مورد نظر یافت نشد لطفا از صحت نام کاربری اطمینان حاصل کنید');
    }
  });
    };
}
