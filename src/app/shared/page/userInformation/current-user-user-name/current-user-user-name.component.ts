import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-user-user-name',
  templateUrl: './current-user-user-name.component.html',
  styleUrls: ['./current-user-user-name.component.scss']
})
export class CurrentUserUserNameComponent implements OnInit {

  public userName: string;
  constructor() { }

  ngOnInit(): void {
    this.setUserName();
  }

  private setUserName() {
    this.userName = 'نام کاربری';
  }
}
