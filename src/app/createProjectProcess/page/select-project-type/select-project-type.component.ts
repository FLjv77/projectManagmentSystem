import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-select-project-type',
  templateUrl: './select-project-type.component.html',
  styleUrls: ['./select-project-type.component.scss']
})
export class SelectProjectTypeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goToCreateProjectSteps() {
    this.router.navigate(['createProject/startCreatProject']);
  }
}
