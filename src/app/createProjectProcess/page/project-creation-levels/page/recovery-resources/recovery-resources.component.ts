import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {InputCustomStyle} from "../../../../../shared/page/component/input-style/input-style.component";
import { CreaterojectService } from 'src/app/createProjectProcess/service/projectCreationLevels/createroject.service';
import { ActivatedRoute } from '@angular/router';
import { ApiResult } from '../../../../../auth/model/authDTO';
import { CommonDataForCreateProjectService } from 'src/app/createProjectProcess/service/commonData/commonDataForCreateProject/common-data-for-create-project.service';
import { ResourceInformation } from 'src/app/createProjectProcess/model/createProjectModel/createProject';

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
  public startDateFormControl = new FormControl();
  public endDateFormControl = new FormControl();
  public projectId: string = '130a88e5-ae4c-ed11-beca-c55a16b26941';

  constructor(private createrojectService: CreaterojectService,
    private commonDataForCreateProjectService: CommonDataForCreateProjectService,
    private activeRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.initInputStyle();
    this.getQuery();
  }


  private getQuery(){
    let id = this.activeRoute.snapshot.queryParamMap.get("projectId");
    if (id) this.projectId = id;
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }
  public getValue(){
    if(this.resourceNameFormControl.value && this.addressResourceFormControl.value){
        return true;
      }
      else{return false}
  }

  public createResourceInformation() {
    this.createrojectService.ModifyProjectResourceInformation(
      this.projectId,
      new ResourceInformation(
        this.resourceNameFormControl.value,
        this.addressResourceFormControl.value
      )
    ).subscribe((res: ApiResult<boolean>) => {
      if(res.isSuccess && res.statusCode == 200) {
        this.commonDataForCreateProjectService.selectStep.emit(8);

        setTimeout(() => {
          document.getElementById('uploadInformation')?.click();
        }, 200);
      }

    });
  }

}
