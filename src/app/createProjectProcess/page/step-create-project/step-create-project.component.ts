import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-step-create-project',
  templateUrl: './step-create-project.component.html',
  styleUrls: ['./step-create-project.component.scss']
})
export class StepCreateProjectComponent implements OnInit, AfterViewInit {
  @Output() selectStep = new EventEmitter<number>();
  @Input() select : number = 0;
  public state: number = 8;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.state = this.select;
    let id = document.getElementById(this.state.toString());
    if(id){
      id.className = 'select-step';
    }
  }

  public selectSteps(id:number){
    this.state = id;
    this.selectStep.emit(id);
  }

}
