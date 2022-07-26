import { InputCustomStyle } from './../../../../../shared/page/component/input-style/input-style.component';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-objectives',
  templateUrl: './project-objectives.component.html',
  styleUrls: ['./project-objectives.component.scss','../../project-creation-levels.component.scss']
})
export class ProjectObjectivesComponent implements OnInit {

  public inputCustomStyle: InputCustomStyle;
  public projectObjectiveFormControl = new FormControl();
  public projectTheBottleneckFormControl = new FormControl();
  public projectChallengeFormControl = new FormControl();

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.initInputStyle();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }
  public getValue(){
    if(this.projectObjectiveFormControl.value && this.projectTheBottleneckFormControl.value && this.projectChallengeFormControl.value &&
      this.projectChallengeFormControl.valid && this.projectTheBottleneckFormControl.valid && this.projectChallengeFormControl.valid){
        return true;
      }
      else{return false}
  } 


  
}
