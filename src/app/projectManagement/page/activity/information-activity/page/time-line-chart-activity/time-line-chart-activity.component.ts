import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Highcharts from "highcharts/highcharts-gantt";
import { ApiResult } from 'src/app/auth/model/authDTO';
import { showActivityDto } from 'src/app/projectManagement/model/activity/activityDto';
import { ActivityConnectToApiService } from 'src/app/projectManagement/service/activity/activityConnectToApi/activity-connect-to-api.service';

@Component({
  selector: 'app-time-line-chart-activity',
  templateUrl: './time-line-chart-activity.component.html',
  styleUrls: ['./time-line-chart-activity.component.scss',
  '../../../../../../projectManagement/page/chart-report-project/chart-report-project.component.scss',
  '../../../../../../advancedSearch/page/advanced-search-according-to-allocation/advanced-search-according-to-allocation.component.scss']
})
export class TimeLineChartActivityComponent implements OnInit {
  @ViewChild('divRef', { static: false }) divReference: ElementRef;
  private projectId: string;
  public tasks: any;
  public siries: any[];
  public optionsCost: any;
  private activityListName: string[] = [];
  private costList: number[] = [];

  constructor(
    private activityConnectToApiService: ActivityConnectToApiService,
    private activeRouting: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.setProjectId();
  }

  private initTimeLineData() {
    let data = this.costList;
    this.optionsCost = {
      xAxis: {
        data: this.activityListName,
        axisLabel: {
          inside: true,
          color: '#999',
        },
        axisTick: {
          show: true,
        },
        axisLine: {
          show: true,
        },
        z: 10,
      },
      yAxis: {
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            color: '#999',
          },
        },
      },
      dataZoom: [
        {
          type: 'inside',
        },
      ],
      series: [
        {
          // For shadow
          type: 'bar',
          itemStyle: {
            color: 'rgba(0,0,0,0.05)'
          },
          barGap: '-100%',
          barCategoryGap: '40%',
          data: data,
          animation: false,
        },
        {
          type: 'bar',
          itemStyle: {
            color: '#58C9B9',
          },
          emphasis: {
            itemStyle: {
              color: '#58C9B9',
            }
          },
          data
        },
      ],
    };

  }

  ngAfterViewInit() {
    this.getData();

  }

  private getData() {
    this.activityConnectToApiService.showActivities(
      this.projectId
    ).subscribe((res: ApiResult<showActivityDto[]>) => {

      for(let i=0; i<res.data.length; i++) {
        this.activityListName.push(res.data[i].activityName);
        this.costList.push(res.data[i].approximateCost);
      }

      this.initTimeLineData();
    });
  }


  private setProjectId() {
    let id = this.activeRouting.snapshot.queryParamMap.get('projectId');
    if(id) this.projectId = id;
  }
}
