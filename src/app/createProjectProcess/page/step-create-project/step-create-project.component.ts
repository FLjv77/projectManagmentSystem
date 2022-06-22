import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step-create-project',
  templateUrl: './step-create-project.component.html',
  styleUrls: ['./step-create-project.component.scss']
})
export class StepCreateProjectComponent implements OnInit {
  @Output() selectStep = new EventEmitter<number>();
  public state: number=1;

  constructor() { }

  ngOnInit(): void {
  }

  public selectSteps(id:number){
    this.state = id;
    this.selectStep.emit(id);
  }

}
