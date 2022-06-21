import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-development-report-project',
  templateUrl: './development-report-project.component.html',
  styleUrls: ['./development-report-project.component.scss','../../project-creation-levels.component.scss']
})
export class DevelopmentReportProjectComponent implements OnInit {

  public reporterNameFormControl = new FormControl();
  public saveDateFormControl = new FormControl();
  public progressFormControl = new FormControl();
  public descreptionReportFormControl = new FormControl();
  public uploadDocumentationProjectFormControl = new FormControl();


  constructor() { }

  ngOnInit(): void {
  }

}
