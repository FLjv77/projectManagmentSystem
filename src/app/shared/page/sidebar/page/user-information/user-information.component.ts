import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit {
  public projectTitle: string = 'مدیریت پروژه';
  public userRoleName: string;
  constructor() { }

  ngOnInit(): void {
    this.setUserRole();
  }

  private setUserRole() {
    this.userRoleName = 'مدیر';
  }
}
