import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-creation-levels',
  templateUrl: './project-creation-levels.component.html',
  styleUrls: ['./project-creation-levels.component.scss']
})
export class ProjectCreationLevelsComponent implements OnInit {

  public selectSteps: number = 1;
  constructor() { }
  ngOnInit(): void {
  }

  public setSelectStep(idStep:number){
    this.selectSteps = idStep;
  }

}
