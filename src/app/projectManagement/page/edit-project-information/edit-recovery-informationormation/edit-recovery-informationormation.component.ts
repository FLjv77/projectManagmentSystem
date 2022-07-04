import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../shared/page/component/input-style/input-style.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-edit-recovery-informationormation',
  templateUrl: './edit-recovery-informationormation.component.html',
  styleUrls: ['./edit-recovery-informationormation.component.scss',
    '../../../../createProjectProcess/page/project-creation-levels/project-creation-levels.component.scss']
})
export class EditRecoveryInformationormationComponent implements OnInit {
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
  public getValue(){
    if(this.resourceNameFormControl.value && this.addressResourceFormControl.value && this.TimeResourceFormControl.value &&
      this.resourceNameFormControl.valid && this.addressResourceFormControl.valid && this.TimeResourceFormControl.valid){
      return true;
    }
    else{return false}
  }
}
