import { Component, OnInit } from '@angular/core';
import { CreateActivityDependency, DependencyActivity, RequestCreateActivityDependency, showActivityDto } from 'src/app/projectManagement/model/activity/activityDto';
import { ActivityConnectToApiService } from 'src/app/projectManagement/service/activity/activityConnectToApi/activity-connect-to-api.service';
import { ApiResult } from '../../../../../../auth/model/authDTO';
import { HttpErrorResponse } from '@angular/common/http';
import { HandleDisplayErrorService } from '../../../../../../shared/service/handleError/handle-display-error.service';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom} from 'rxjs'

@Component({
  selector: 'app-dependency-activities',
  templateUrl: './dependency-activities.component.html',
  styleUrls: ['./dependency-activities.component.scss', '../progress-report-activity/progress-report-activity.component.scss']
})
export class DependencyActivitiesComponent implements OnInit {
  public disableChangeMatrix: boolean[][] = [[]];
  public dependentActivities: Array<ActivitySelectedDTO>;
  public activityList: showActivityDto[] = [];
  private projectId: string;
  public constructor(
    private activeRouting: ActivatedRoute,
    private activityConnectToApiService: ActivityConnectToApiService,
    private handleError: HandleDisplayErrorService) 
    {
      this.dependentActivities = new Array<ActivitySelectedDTO>
    }

  ngOnInit(): void {
    this.setProjectId();
    this.getProjectctivity();

    //TODO: develope dependency of activities
    this.getDependency();
    // show the dependentActivities
  }

  private setProjectId() {
    let id = this.activeRouting.snapshot.queryParamMap.get('projectId');
    if(id) this.projectId = id;
  }

  private initDisableChangeMatrix(len: number) {
    let arrayBool = [];
    for(let i=0; i < len; i++) {
      arrayBool.push(false);
    }
    for(let i=0; i < len; i++) {
      this.disableChangeMatrix.push(arrayBool);
    }
  }

  private getDependency() {
    this.showDependentActivitiesAsync()
    .then(result => {
      this.dependentActivities = result;
      console.log(this.dependentActivities);
    });
  }

  private getProjectctivity() {
    this.activityConnectToApiService.showActivities(
      this.projectId
    ).subscribe((res: ApiResult<showActivityDto[]>) => {
      if(res.isSuccess && res.statusCode == 200) {
        this.activityList = res.data;
        this.initDisableChangeMatrix(res.data.length);
        this.getDependency();
      }
    });
  }

  public changeActivityDependency(sourceActivityIndex: number, destinationActivityIndex: number, state: DependencyActivity) {
    this.disableChangeState(sourceActivityIndex, destinationActivityIndex ,true);
    this.activityConnectToApiService.modifyDependentActivity(
      new RequestCreateActivityDependency(
        this.projectId,
        new CreateActivityDependency(
          this.activityList[sourceActivityIndex].activityName,
          this.activityList[destinationActivityIndex].activityName,
          state
        )
      )
    ).subscribe((res: ApiResult<boolean>) => {
      this.disableChangeState(sourceActivityIndex, destinationActivityIndex, false);
      if(res.isSuccess && res.statusCode == 200) {

      } else {
        this.handleError.showError(res.statusCode);
      }
    }, (err: HttpErrorResponse) => {
      this.disableChangeState(sourceActivityIndex, destinationActivityIndex, false);
      this.handleError.showError(err.error.StatusCode);

    })
  }

  private disableChangeState(index1: number, index2: number, state: boolean) : void {
    this.disableChangeMatrix[index1][index2] = state;
  }

  private async showDependentActivitiesAsync(): Promise<Array<ActivitySelectedDTO>>
  {
    let dependenctActivity = await lastValueFrom
    (this.activityConnectToApiService.showDependentActivities(this.projectId));
  
    let data = dependenctActivity.data;
    let dependentActivitiesSelectedDto: Array<ActivitySelectedDTO> = 
        new Array<ActivitySelectedDTO>();

    Object.entries(data).forEach(activity => {
      dependentActivitiesSelectedDto
              .push(new ActivitySelectedDTO(activity[0], DependencyActivity.none));
      Object.entries(activity[1]).forEach(childActivity => 
        {            
          let currentActivity = dependentActivitiesSelectedDto
              .find(c => c.activityName == activity[0]);
          currentActivity?.dependentActivity
              .push(new ActivitySelectedDTO(childActivity[0], childActivity[1]));
        });
    });    
    return dependentActivitiesSelectedDto;
  }
}

export class ActivitySelectedDTO {
  public constructor(public activityName: string,
    public typeOfDependentActivity: DependencyActivity | string | [string, number],
    public dependentActivity: Array<ActivitySelectedDTO>= 
    new Array<ActivitySelectedDTO>()) {
    
  }
}
