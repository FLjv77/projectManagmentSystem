import { OutputInfo } from '../../../../model/createProjectModel/createProject';
import { InputCustomStyle } from './../../../../../shared/page/component/input-style/input-style.component';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonDataForCreateProjectService } from 'src/app/createProjectProcess/service/commonData/commonDataForCreateProject/common-data-for-create-project.service';
// import {MatSnackBar} from '@angular/material/snack-bar';

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
  @Output() objectiveInputValue = new EventEmitter<OutputInfo>();

  constructor(private router: Router,
    private commonDataForCreateProjectService: CommonDataForCreateProjectService) { }

  ngOnInit(): void {
    this.initInputStyle();
    this.checkValueIsSet();
  }

  private checkValueIsSet() {
    if(this.commonDataForCreateProjectService.projectChallange) this.projectChallengeFormControl.setValue(this.commonDataForCreateProjectService.projectChallange);
    if(this.commonDataForCreateProjectService.projectTargets) this.projectObjectiveFormControl.setValue(this.commonDataForCreateProjectService.projectTargets);
    if(this.commonDataForCreateProjectService.projectBottleNeck) this.projectTheBottleneckFormControl.setValue(this.commonDataForCreateProjectService.projectBottleNeck);

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

  public inputInfo: OutputInfo;
  public goToNext(state: number) {
    if (this.projectChallengeFormControl.value && this.projectObjectiveFormControl.value &&
      this.projectTheBottleneckFormControl.value) {
        this.commonDataForCreateProjectService.selectStep.emit(2);
        this.commonDataForCreateProjectService.setObjective(
          this.projectObjectiveFormControl.value,
          this.projectTheBottleneckFormControl.value,
          this.projectChallengeFormControl.value
        );
        setTimeout(() => {
          document.getElementById('basicInformationProject')?.click();
        }, 200);
    }
    else {
        // this._snackBar.open('تمامی فیلد ها رو پر کنید', 'Splash', {
        //   horizontalPosition: 'start',
        //   verticalPosition: 'bottom',
        // });
      }
    }
  }