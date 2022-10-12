import { Component, OnInit } from '@angular/core';
import { CreateActivityDependency, DependencyActivitystring, RequestCreateActivityDependency, showActivityDto } from 'src/app/projectManagement/model/activity/activityDto';
import { ActivityConnectToApiService } from 'src/app/projectManagement/service/activity/activityConnectToApi/activity-connect-to-api.service';
import { ApiResult } from '../../../../../../auth/model/authDTO';
import { HttpErrorResponse } from '@angular/common/http';
import { HandleDisplayErrorService } from '../../../../../../shared/service/handleError/handle-display-error.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dependency-activities',
  templateUrl: './dependency-activities.component.html',
  styleUrls: ['./dependency-activities.component.scss', '../progress-report-activity/progress-report-activity.component.scss']
})
export class DependencyActivitiesComponent implements OnInit {
  public disableChangeMatrix: boolean[][];
  public activityList: showActivityDto[];
  private projectId: string;
  constructor(
    private activeRouting: ActivatedRoute,
    private activityConnectToApiService: ActivityConnectToApiService,
    private handleError: HandleDisplayErrorService) { }

  ngOnInit(): void {
    this.setProjectId();
    this.getProjectctivity();
  }

  private setProjectId() {
    let id = this.activeRouting.snapshot.queryParamMap.get('projectId');
    if(id) this.projectId = id;
  }

  private getActivityList() {
    this.initDisableChangeMatrix();
  }

  private initDisableChangeMatrix() {
    for(let i=0; i < this.activityList.length; i++) {
      for(let t=0; i < this.activityList.length; t++) {
        this.disableChangeMatrix[i][t] = false;
      }
    }
  }

  private getProjectctivity() {
    this.activityConnectToApiService.showActivities(
      this.projectId
    ).subscribe((res: ApiResult<showActivityDto[]>) => {
      console.log(res);

      if(res.isSuccess && res.statusCode == 200) {
              this.activityList = res.data;
      this.getActivityList();

      console.log(this.activityList);
      }


    });
  }

  public changeActivityDependency(sourceActivityIndex: number, destinationActivityIndex: number, state: DependencyActivitystring) {
    this.disableChangeState(sourceActivityIndex, destinationActivityIndex ,true);
    this.activityConnectToApiService.modifyDependentActivity(
      new RequestCreateActivityDependency(
        this.projectId,
        new CreateActivityDependency(
          this.activityList[sourceActivityIndex].activityId,
          this.activityList[destinationActivityIndex].activityId,
          state
        )
      )
    ).subscribe((res: ApiResult<boolean>) => {
      this.disableChangeState(sourceActivityIndex, destinationActivityIndex ,false);
      if(res.isSuccess && res.statusCode == 200) {

      } else {
        this.handleError.showError(res.statusCode);
      }
    }, (err: HttpErrorResponse) => {
      this.disableChangeState(sourceActivityIndex, destinationActivityIndex ,false);
      this.handleError.showError(err.error.StatusCode);

    })
  }

  private disableChangeState(index1: number, index2: number, state: boolean) {
    this.disableChangeMatrix[index1][index2] = state;
  }
}
