import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { InputCustomStyle } from './../../../../shared/page/component/input-style/input-style.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialized-information-on-employment',
  templateUrl: './specialized-information-on-employment.component.html',
  styleUrls: ['./specialized-information-on-employment.component.scss','../../project-creation-levels/project-creation-levels.component.scss',
  '../specialized-information-removal-marginalization/specialized-information-removal-marginalization.component.scss']
})
export class SpecializedInformationOnEmploymentComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public workshopName = new FormControl();
  public workshopType = new FormControl();
  public numberPeopleWorkshop = new FormControl();
  public EducationCenterName = new FormControl();
  public EducationCenterType = new FormControl();
  public numberPeopleEducationCenter = new FormControl();
  public amount = new FormControl();
  public number = new FormControl();
  public reason = new FormControl();
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
