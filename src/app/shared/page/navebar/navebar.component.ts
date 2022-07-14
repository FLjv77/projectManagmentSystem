import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

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


  openFullscreen() {
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
}
