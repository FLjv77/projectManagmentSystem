import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdvancedSearchConnecctToApiService } from 'src/app/advancedSearch/service/advancedSearchConnecctToApi/advanced-search-connecct-to-api.service';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { showActivityDto } from 'src/app/projectManagement/model/activity/activityDto';
import { ActivityConnectToApiService } from 'src/app/projectManagement/service/activity/activityConnectToApi/activity-connect-to-api.service';
import { HandleDisplayErrorService } from 'src/app/shared/service/handleError/handle-display-error.service';
import { InputCustomStyle } from '../../../../../../shared/page/component/input-style/input-style.component';

@Component({
  selector: 'app-activity-by-detail',
  templateUrl: './activity-by-detail.component.html',
  styleUrls: ['./activity-by-detail.component.scss','../activity-relationships/activity-relationships.component.scss']
})
export class ActivityByDetailComponent implements OnInit {
  private projectId: string;
  public weightTimeControl: FormControl;
  public weightCostControl: FormControl;
  public activityNameControl: FormControl;
  public inputCustomStyle: InputCustomStyle;
  public activityList: showActivityDto[];
  public isEditMode: boolean = false;
  public panelOpenState: boolean = false;

  constructor(
    private activityConnectToApiService: ActivityConnectToApiService,
    private activeRouting: ActivatedRoute,
    private handleDisplayErrorService: HandleDisplayErrorService,
    ) { }

  ngOnInit(): void {
    this.initFormControl();
    this.initInputStyle();
    this.setProjectId();
    this.getProjectctivity();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  private setProjectId() {
    let id = this.activeRouting.snapshot.queryParamMap.get('projectId');
    if(id) this.projectId = id;
  }

  private getProjectctivity() {
    this.activityConnectToApiService.showActivities(
      this.projectId
    ).subscribe((res: ApiResult<showActivityDto[]>) => {
      this.activityList = res.data;
    });
  }

  private initFormControl() {
    this.weightCostControl = new FormControl();
    this.weightTimeControl = new FormControl();
    this.activityNameControl = new FormControl();
  }

  public changeEditMode() {
    this.isEditMode = !this.isEditMode;
  }


  public togglePanel() {
      this.panelOpenState = !this.panelOpenState
  }
}
