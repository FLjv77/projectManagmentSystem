import { AlertDialogBySweetAlertService } from './../../../../../../shared/service/alertDialog/alert-dialog-by-sweet-alert.service';
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
import { Component, Input, OnInit, EventEmitter ,Output} from '@angular/core';

@Component({
  selector: 'app-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.scss']
})
export class KnowledgeBaseComponent implements OnInit {

  @Input() data: ProjectSelectedDTO;
  @Input() projectIdSelect: string|string[];
  public knowledgeBaseds: KnowledgeBased[];
  private projectId : string|null;
  public inputCustomStyle: InputCustomStyle;
  public numberCompanyControlList = new Array<FormControl>();
  public AreaOfExpertise = new Array<FormControl>();
  public numberAmount = new Array<FormControl>();
  public loanAmount = new Array<FormControl>();
  public reasonAmount = new Array<FormControl>();
  @Output() refreshList= new EventEmitter<boolean>();

  public edit: boolean;
  constructor(
    private router: Router,
    private commonDataForCreateProjectService: CommonDataForCreateProjectService,
    private specializedInformationService: SpecializedInformationService,
    private activeRoute:ActivatedRoute,
    private alertDialogBySweetAlertService:AlertDialogBySweetAlertService) {}

  ngOnInit(): void {
    this.initInputStyle();
    this.knowledgeBaseds = new Array<KnowledgeBased>();
    this.getData();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public getData(){
    if (this.data.projectSpeceficDetail.knowledgeBaseds) {
      this.knowledgeBaseds = this.data.projectSpeceficDetail.knowledgeBaseds;
      this.setResult();
    }
    else{
      this.addList();
    }
  }

  public setResult(){
    for (let i = 0; i < this.knowledgeBaseds.length; i++) {
      this.numberCompanyControlList.push(new FormControl());
      this.AreaOfExpertise.push(new FormControl());
      this.reasonAmount.push(new FormControl());
      this.numberAmount.push(new FormControl());
      this.loanAmount.push(new FormControl());
      this.numberCompanyControlList[i].setValue(this.knowledgeBaseds[i].countOfCompany);
      this.AreaOfExpertise[i].setValue(this.knowledgeBaseds[i].areaExpert);
      this.reasonAmount[i].setValue(this.knowledgeBaseds[i].loansAndFacilities.description);
      this.numberAmount[i].setValue(this.knowledgeBaseds[i].loansAndFacilities.count);
      this.loanAmount[i].setValue(this.knowledgeBaseds[i].loansAndFacilities.amount);
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

  public saved(){
    this.editList();
    this.edit = false;
  }

  public editForm(){
    this.edit = true;
  }

  public editList(){
    if (this.checkedNumberCompanyControlList()==true && this.checkedAreaOfExpertise()==true
    && this.checkedNumberAmount()==true && this.checkedLoanAmount()==true && this.checkedReasonAmount()==true) {
      this.specializedInformationService.ModifyKnowledgeBasedSpeceficDetail1(this.projectIdSelect,
      new KnowledgeBasedSpeceficDetailDTO(this.knowledgeBaseds)).subscribe((res:ApiResult<KnowledgeBasedSpeceficDetailDTO>)=>{
        if (res.statusCode==200 && res.isSuccess==true) {
          this.knowledgeBaseds = res.data.knowledgeBaseds;
          this.alertDialogBySweetAlertService.showSuccessAlert('با موفقیت ویرایش شد')
          this.refreshList.emit(true);
        }
      });
    }
    else {
      this.alertDialogBySweetAlertService.showErrorAlert('تمامی فیلد ها رو پرکنید')
    }
  }

  public checkedNumberCompanyControlList(): any{
    let res : boolean = true;
    console.log(this.numberCompanyControlList);
    
    for (let i = 0; i < this.numberCompanyControlList.length; i++) {
      if (this.numberCompanyControlList[i].value==null) {
        res = false;
        return res;
      }
      else {
          res = true;
      }
    }
    return res;
  }

  public checkedAreaOfExpertise(): any{
    console.log(this.AreaOfExpertise);
    let res : boolean = true;
    for (let i = 0; i < this.AreaOfExpertise.length; i++) {
      if (this.AreaOfExpertise[i].value==null) {
        res = false;
        return res;
      }
      else {
          res = true;
      }
    }
    return res;
  }

  public checkedNumberAmount(): any{
    let res : boolean = true;
    for (let i = 0; i < this.numberAmount.length; i++) {
      if (this.numberAmount[i].value==null) {
        res = false;
        return res;
      }
      else {
          res = true;
      }
    }
    return res;
  }

  public checkedLoanAmount(): any{
    let res : boolean = true;
    for (let i = 0; i < this.loanAmount.length; i++) {
      if (this.loanAmount[i].value==null) {
        res = false;
        return res;
      }
      else {
          res = true;
      }
    }
    return res;
  }

  public checkedReasonAmount(): any{
    let res : boolean = true;
    for (let i = 0; i < this.reasonAmount.length; i++) {
      if (this.reasonAmount[i].value==null) {
        res = false;
        return res;
      }
      else {
          res = true;
      }
    }
    return res;
  }
}
