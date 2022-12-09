import { DisplayPathModel } from './../../../shared/model/displayPathModel';
import { HandleModalService } from './../../../shared/service/handleModalService/handle-modal.service';
import { Component, OnInit } from '@angular/core';
import { CompanyVerificationDToService } from 'src/app/workSpace/service/CompanyVerificationDTo/company-verification-dto.service';
import { ApiResult } from '../../../auth/model/authDTO';
import { ProjectSelectedDTOResualt, UserSelectedDtos } from 'src/app/workSpace/model/companyModel';

@Component({
  selector: 'app-veiw-user-list',
  templateUrl: './veiw-user-list.component.html',
  styleUrls: ['./veiw-user-list.component.scss']
})
export class VeiwUserListComponent implements OnInit {
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public userList: UserSelectedDtos[];

  constructor(private handleModalService : HandleModalService,
              private companyVerificationDToService: CompanyVerificationDToService) { }

  ngOnInit(): void {
    this.initDisplayPath();
    this.getUser();
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

  public openMdalAddUser(){
    this.handleModalService.openModal('add-user-modal');
  }
}
