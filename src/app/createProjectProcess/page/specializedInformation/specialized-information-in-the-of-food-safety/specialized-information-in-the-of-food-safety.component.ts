import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { InputCustomStyle } from './../../../../shared/page/component/input-style/input-style.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialized-information-in-the-of-food-safety',
  templateUrl: './specialized-information-in-the-of-food-safety.component.html',
  styleUrls: ['./specialized-information-in-the-of-food-safety.component.scss','../../project-creation-levels/project-creation-levels.component.scss',
  '../specialized-information-removal-marginalization/specialized-information-removal-marginalization.component.scss']
})
export class SpecializedInformationInTheOfFoodSafetyComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public centerTitle = new FormControl();
  public number = new FormControl();
  public budget = new FormControl();
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