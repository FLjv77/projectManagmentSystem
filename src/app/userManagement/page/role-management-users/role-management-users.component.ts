import { DisplayPathModel } from './../../../shared/model/displayPathModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management-users',
  templateUrl: './role-management-users.component.html',
  styleUrls: ['./role-management-users.component.scss']
})
export class RoleManagementUsersComponent implements OnInit {
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;

  constructor() { }

  ngOnInit(): void {
    this.initDisplayPath();
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت کاربران', false, '');
    this.path2 = new DisplayPathModel('مدیریت نقش کاربران', false, '');
  }
}