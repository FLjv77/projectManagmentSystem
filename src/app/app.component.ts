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
    return location.href.indexOf('auth') == -1;
  }
}
