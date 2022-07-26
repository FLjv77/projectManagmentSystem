import { Router } from '@angular/router';
import { InputCustomStyle } from './../../../../shared/page/component/input-style/input-style.component';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge-base-information',
  templateUrl: './knowledge-base-information.component.html',
  styleUrls: ['./knowledge-base-information.component.scss','../../project-creation-levels/project-creation-levels.component.scss',
  '../specialized-information-removal-marginalization/specialized-information-removal-marginalization.component.scss']
})
export class KnowledgeBaseInformationComponent implements OnInit {

  public inputCustomStyle: InputCustomStyle;
  public numberCompany = new FormControl();
  public AreaOfExpertise = new FormControl();
  public numberAmount = new FormControl();
  public loanAmount = new FormControl();
  public reasonAmount = new FormControl();
  public LocationFormControl = new FormControl();

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.initInputStyle();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public goOnMap() {
    this.router.navigate(['../../createProject/selectLocationOnMap']);
  }
}
