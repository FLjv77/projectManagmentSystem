import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'comprehensiveProjectManagement';
  constructor(private router: Router) {
  }

  public checkShowNavAndSideBar(): boolean {
    return location.href.indexOf('auth/loginUser') == -1 ,
     location.href.indexOf('auth/registerUser') == -1,
     location.href.indexOf('auth/registerCompany') == -1;
  }
}
