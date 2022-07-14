import { Router } from '@angular/router';
import { DisplayPathModel } from './../../../shared/model/displayPathModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public path1: DisplayPathModel;
  public path2: DisplayPathModel;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initDisplayPath();
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('تنظیمات', false, '');
    this.path2 = new DisplayPathModel('پروفایل', false, '');
  }

  public goToWorkSpaceProfile() {
    this.router.navigate(['../../workspace/workSpaceProfile']);
  }

  public goUserList() {
    this.router.navigate(['../../userManagement/userList']);
  }

  public goProjectList() {
    this.router.navigate(['../../projectManagement/projectList']);
  }
}
