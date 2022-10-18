import { DisplayPathModel } from './../../../shared/model/displayPathModel';
import { HandleModalService } from './../../../shared/service/handleModalService/handle-modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiw-user-list',
  templateUrl: './veiw-user-list.component.html',
  styleUrls: ['./veiw-user-list.component.scss']
})
export class VeiwUserListComponent implements OnInit {
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;

  constructor(private handleModalService : HandleModalService) { }

  ngOnInit(): void {
    this.initDisplayPath();
    this.getUser();
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت کاربران', false, '');
    this.path2 = new DisplayPathModel('مشاهده کاربران', false, '');
  }

  public getUser(){
    
  }

  public openMdalAddUser(){
    this.handleModalService.openModal('add-user-modal');
  }
}
