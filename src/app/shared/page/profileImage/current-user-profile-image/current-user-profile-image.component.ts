import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-current-user-profile-image',
  templateUrl: './current-user-profile-image.component.html',
  styleUrls: ['./current-user-profile-image.component.scss']
})
export class CurrentUserProfileImageComponent implements OnInit {
  @Input() profileStyle: string;
  public userProfileUrl: string;
  constructor() { }

  ngOnInit(): void {
    this.setUserProfileUrl();
  }

  private setUserProfileUrl() {
    this.userProfileUrl = 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=360';
  }

}
