import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../../shared/page/component/input-style/input-style.component";

@Component({
  selector: 'app-recovery-resources',
  templateUrl: './recovery-resources.component.html',
  styleUrls: ['./recovery-resources.component.scss','../../project-creation-levels.component.scss']
})
export class RecoveryResourcesComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public resourceNameFormControl = new FormControl();
  public addressResourceFormControl = new FormControl();
  public TimeResourceFormControl = new FormControl();

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
