import { url } from './../../../../assets/url/url';
import { AdvancedSearchConnecctToApiService } from 'src/app/advancedSearch/service/advancedSearchConnecctToApi/advanced-search-connecct-to-api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { ProjectSelectedDTOResualt } from './../../../workSpace/model/companyModel';
import { CompanyVerificationDToService } from './../../../workSpace/service/CompanyVerificationDTo/company-verification-dto.service';
import { Select2OptionData } from 'ng-select2';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-drop-down-user-list',
  templateUrl: './drop-down-user-list.component.html',
  styleUrls: ['./drop-down-user-list.component.scss']
})
export class DropDownUserListComponent implements OnInit {

  @Input() placeholder: string;
  @Input() companyId: string| string[];
  @Output() parentid = new EventEmitter<string|string[]>();

  public title: string = 'انتخاب پروژه';
  public projectData: Array<Select2OptionData>;
  public placeHolder: Select2OptionData;

  constructor(
    private CompanyVerificationDToService: CompanyVerificationDToService,
    private advancedSearchConnecctToApiService:AdvancedSearchConnecctToApiService
  ) {}

  ngOnInit(): void {
    this.initProjectList();
    this.getUserList();
  }

  public setParentId(id: string|string[]) {
    this.parentid.emit(id);
    this.advancedSearchConnecctToApiService.projectIdSelected.emit(id);
  }

  private getUserList() {      
      this.CompanyVerificationDToService.GetUsersWithDynamicFilter().
    subscribe((res: ApiResult<ProjectSelectedDTOResualt>) => {
      if(res.isSuccess && res.statusCode == 200) {       
        for(let i=0; i<res.data.userSelectedDtos.length; i++) {
          let obj = {
            text: res.data.userSelectedDtos[i].userName,
            id: res.data.userSelectedDtos[i].userName
          }
          this.projectData.push(obj);          
        }
      }
    }, (err: HttpErrorResponse) => {
      });

  }

  public setProject(name: string){
    this.title = name;
  }

  private initProjectList() {
    this.placeHolder = {
      text: 'انتخاب یک کاربر به عنوان ناظر',
      id: 'none'
    }

    this.projectData = [];

  }
}
