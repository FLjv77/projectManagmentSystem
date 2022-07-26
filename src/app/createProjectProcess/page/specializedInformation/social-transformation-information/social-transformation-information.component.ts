import { InputCustomStyle } from './../../../../shared/page/component/input-style/input-style.component';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-transformation-information',
  templateUrl: './social-transformation-information.component.html',
  styleUrls: ['./social-transformation-information.component.scss','../../project-creation-levels/project-creation-levels.component.scss',
  '../specialized-information-removal-marginalization/specialized-information-removal-marginalization.component.scss']
})
export class SocialTransformationInformationComponent implements OnInit {

  public inputCustomStyle: InputCustomStyle;
  public numberFloors = new FormControl();
  public Capacity = new FormControl();
  public numberCamp = new FormControl();
  public budget = new FormControl();
  public numberIntroduction = new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.initInputStyle();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }
  
}
