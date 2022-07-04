import { UntypedFormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../../shared/page/component/input-style/input-style.component";

@Component({
  selector: 'app-recovery-resources',
  templateUrl: './recovery-resources.component.html',
  styleUrls: ['./recovery-resources.component.scss','../../project-creation-levels.component.scss']
})
export class RecoveryResourcesComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public resourceNameFormControl = new UntypedFormControl();
  public addressResourceFormControl = new UntypedFormControl();
  public TimeResourceFormControl = new UntypedFormControl();

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
