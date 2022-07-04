import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-progress-reporter',
  templateUrl: './submit-progress-reporter.component.html',
  styleUrls: ['./submit-progress-reporter.component.scss']
})
export class SubmitProgressReporterComponent implements OnInit {

  public selectedToggle : number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  public setSelectedToggle(state: number){
    this.selectedToggle = state;
  }
}
