import { Select2OptionData } from 'ng-select2';
import { Component, Input, OnInit } from '@angular/core';
import { ActivityConnectToApiService } from 'src/app/projectManagement/service/activity/activityConnectToApi/activity-connect-to-api.service';
import { ApiResult } from '../../../auth/model/authDTO';

@Component({
  selector: 'app-drop-down-activities',
  templateUrl: './drop-down-activities.component.html',
  styleUrls: ['./drop-down-activities.component.scss', '../drop-down-project-list/drop-down-project-list.component.scss']
})
export class DropDownActivitiesComponent implements OnInit {

  @Input() placeholder: string;
  @Input() projectId: string;

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
    this.activityConnectToApiService.showDependentActivities(
      this.projectId
    ).subscribe((res: ApiResult<any>) => {
      console.log(res);

    });
  }

  private initProjectList() {
    this.placeHolder = {
      text: 'انتخاب فعالیت اصلی',
      id: 'none'
    }

    this.projectData = [
      {
        text: 'فعالیت 1',
        id: 'Basic 1'
      },
      {
        text: 'فعالیت 2',
        id: 'Basic 2'
      },
      {
        text: 'فعالیت 3',
        id: 'Basic 2'
      },
      {
        text: 'فعالیت 4',
        id: 'Basic 2'
      },
      {
        text: 'فعالیت 5',
        id: 'Basic 3'
      },
      {
        text: 'فعالیت 6',
        id: 'Basic 4'
      }
    ];

  }
}
