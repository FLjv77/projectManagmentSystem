import { Select2OptionData } from 'ng-select2';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivityConnectToApiService } from 'src/app/projectManagement/service/activity/activityConnectToApi/activity-connect-to-api.service';
import { ApiResult } from '../../../auth/model/authDTO';
import { showActivityDto } from 'src/app/projectManagement/model/activity/activityDto';

@Component({
  selector: 'app-drop-down-activities',
  templateUrl: './drop-down-activities.component.html',
  styleUrls: ['./drop-down-activities.component.scss', '../drop-down-project-list/drop-down-project-list.component.scss']
})
export class DropDownActivitiesComponent implements OnInit {

  @Input() placeholder: string;
  @Input() projectId: string;
  @Output() activityId = new EventEmitter<string>();

  public title: string = 'انتخاب فعالیت اصلی';
  public projectData: Array<Select2OptionData>;
  public placeHolder: Select2OptionData;

  constructor(
    private activityConnectToApiService: ActivityConnectToApiService
  ) { }

  ngOnInit(): void {
    this.initProjectList();
    this.getProjectctivity();
  }

  public setProject(name: string){
    this.title = name;
  }

  private getProjectctivity() {
    this.activityConnectToApiService.showActivities(
      this.projectId
    ).subscribe((res: ApiResult<showActivityDto[]>) => {
      console.log(res.data);

      for(let i=0; i<res.data.length; i++) {
        let obj = {
          text: res.data[i].activityName,
          id: res.data[i].activityId
        }
        this.projectData.push(obj);
      }
    });
  }

  public onSelectActivity(event: any) {
    this.activityId.emit(event);
  }

  private initProjectList() {
    this.placeHolder = {
      text: 'انتخاب فعالیت اصلی',
      id: 'none'
    }

    this.projectData = [];

  }
}
