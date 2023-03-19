import { event } from 'jquery';
import { DisplayPathModel } from './../../../shared/model/displayPathModel';
import { HandleModalService } from './../../../shared/service/handleModalService/handle-modal.service';
import { Component, Input, OnInit } from '@angular/core';
import { CompanyVerificationDToService } from 'src/app/workSpace/service/CompanyVerificationDTo/company-verification-dto.service';
import { ApiResult } from '../../../auth/model/authDTO';
import { ProjectSelectedDTOResualt, UserSelectedDtos } from 'src/app/workSpace/model/companyModel';

@Component({
  selector: 'app-veiw-user-list',
  templateUrl: './veiw-user-list.component.html',
  styleUrls: ['./veiw-user-list.component.scss']
})
export class VeiwUserListComponent implements OnInit {
  public searchText = '';
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public userList: UserSelectedDtos[];
  public userListSave: Array<string> = [];
  public title = 'angular-text-search-highlight';
  @Input() characters : string[];

  constructor(private handleModalService : HandleModalService,
              private companyVerificationDToService: CompanyVerificationDToService) { }

  ngOnInit(): void {
    this.initDisplayPath();
    this.getUser();
  }

  public setList($event: any){
    if($event!=''){
      if (this.userList) {      
        this.userList = this.userList.filter( (el) => el.userName.toLowerCase().includes($event.toLowerCase()));
      }
    }
    else this.getUser();
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت کاربران', false, '');
    this.path2 = new DisplayPathModel('مشاهده کاربران', false, '');
  }

  public getUser() {
    this.companyVerificationDToService.GetUsersWithDynamicFilter().
    subscribe((res: ApiResult<ProjectSelectedDTOResualt>) => {
      if(res.isSuccess && res.statusCode == 200) {        
        this.userList = res.data.userSelectedDtos;
      }
    });
  }

  public getUserRole(list: string[]) {
    let res = '';
    for(let i =0; i< list.length; i++) {
      if(res) res += '-'
      if(list[i] == "CompanyAdmin") res += ' مدیر شرکت ';
      else if(list[i] == "Supervisor") res += ' ناظر ';
      else if(list[i] == "HoldingAdmin") res += ' مدیر هولدینگ ';
    }
    return res;
  }

  public openMdalAddUser(){
    this.handleModalService.openModal('add-user-modal');
  }
}
