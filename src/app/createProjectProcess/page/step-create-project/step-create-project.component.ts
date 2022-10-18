import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';
import { CommonDataForCreateProjectService } from '../../service/commonData/commonDataForCreateProject/common-data-for-create-project.service';

@Component({
  selector: 'app-step-create-project',
  templateUrl: './step-create-project.component.html',
  styleUrls: ['./step-create-project.component.scss']
})
export class StepCreateProjectComponent implements OnInit, AfterViewInit {
  @Input() select : number = 0;
  public state: number = 3;
  private currentStep: number = 1;

  constructor(
    private commonDataForCreateProjectService: CommonDataForCreateProjectService) {
      this.subscribeChangeSteps();
     }

  ngOnInit(): void {
  }

  private subscribeChangeSteps() {
    this.commonDataForCreateProjectService.selectStep.subscribe((res: number) => {
      if(res > this.currentStep) this.currentStep = res;

    });
  }

  ngAfterViewInit(): void {
    this.state = this.select;
    let id = document.getElementById(this.state.toString());
    if(id){
      id.className = 'select-step';
    }
  }

  public selectSteps(id:number) {
    if(this.currentStep >= id) {
      this.state = id;
      this.commonDataForCreateProjectService.selectStep.emit(id);
    }
  }

}
