import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { UserRole } from '../../model/naveBarModel';

@Component({
  selector: 'app-navebar',
  templateUrl: './navebar.component.html',
  styleUrls: ['./navebar.component.scss']
})
export class NavebarComponent implements OnInit {

  public isFullScreen: boolean = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public logout() {
    this.router.navigate(['../../auth/loginUser']);
  }


  public openFullscreen() {
    let elem = document.getElementById("screen");

    if (elem) {
      if (!this.isFullScreen) {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        }
      }
      else {
        document.exitFullscreen();
      }
    }


    this.isFullScreen = !this.isFullScreen;
  }

  public changeUserRole(stateRole: UserRole) {
    switch(stateRole) {
      case 0 : this.router.navigate(['../../dashboard/home']); break;
      case 1 : this.router.navigate(['../../dashboard/homeCompany']); break;
      case 2 : this.router.navigate(['../../dashboard/homeSupervisor']); break;
    }
  }

}

