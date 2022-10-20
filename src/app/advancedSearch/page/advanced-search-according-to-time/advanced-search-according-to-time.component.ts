import { FormControl } from '@angular/forms';
import { InputCustomStyle } from './../../../shared/page/component/input-style/input-style.component';
import { Component, Input, OnInit } from '@angular/core';
import {DisplayPathModel} from "../../../shared/model/displayPathModel";
import { ProjectDevelopeStatus, ProjectSelectedDTO } from 'src/app/projectManagement/model/project/projectDto';
import { AdvancedSearchConnecctToApiService } from '../../service/advancedSearchConnecctToApi/advanced-search-connecct-to-api.service';

@Component({
  selector: 'app-advanced-search-according-to-time',
  templateUrl: './advanced-search-according-to-time.component.html',
  styleUrls: ['./advanced-search-according-to-time.component.scss',
  '../../../projectManagement/page/chart-report-project/chart-report-project.component.scss',
    '../advanced-search-according-to-allocation/advanced-search-according-to-allocation.component.scss']
})
export class AdvancedSearchAccordingToTimeComponent implements OnInit {
  options: any;
  options2: any;
  options3: any;

  @Input() projectList: ProjectSelectedDTO[];
  private projectListName: string[] = [];
  private projectListState: string[] = ['در حال مذاکره', 'متمم', 'درحال انجام', 'تکمیل شده'];
  private projectTime: number[] = [];
  private projectTimeDelay: number[] = [];
  private projectStateNumber: number[] = [0,0,0,0];

  constructor(private advancedSearchConnecctToApiService: AdvancedSearchConnecctToApiService) {}

  ngAfterViewInit(): void {
    this.subscribeProjectSelected();
  }

  private subscribeProjectSelected() {
    if(this.projectList) {
      this.getListProject();
      this.getData();
      this.initChart();
      this.initChart2();
      this.initChart3();
    }

    this.advancedSearchConnecctToApiService.projectListHandel.subscribe((res: ProjectSelectedDTO[]) => {
      this.projectList = res;
      this.getListProject();
      this.getData();
      this.initChart();
      this.initChart2();
      this.initChart3();
    });

  }

  private getListProject() {
    for(let i=0; i<this.projectList.length; i++) {
      this.projectListName.push(this.projectList[i].projectName);
    }
 }

 private getData() {
  for(let i=0; i<this.projectList.length; i++) {
    this.projectTime.push(this.projectList[i].projectDeliveryTimeAsNumber);

    if(this.projectList[i].projectDeliveryTimeAsNumber < 0) this.projectTimeDelay.push(this.projectList[i].projectDeliveryTimeAsNumber);

    switch(this.projectList[i].projectStatus) {
      case ProjectDevelopeStatus.dealClosed: this.projectStateNumber[1]++; break;
      case ProjectDevelopeStatus.finished: this.projectStateNumber[3]++; break;
      case ProjectDevelopeStatus.inProgress: this.projectStateNumber[2]++; break;
      case ProjectDevelopeStatus.underNegotiation: this.projectStateNumber[0]++; break;
    }
  }
 }

  ngOnInit(): void {

  }

  private initChart() {
    let data = this.projectTime;
    this.options = {
      xAxis: {
        data: this.projectListName,
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
            color: '#519D9E',
          },
          emphasis: {
            itemStyle: {
              color: '#4dd9db',
            }
          },
          data
        },
      ],
    };
  }


  private initChart2() {
    let data = this.projectTimeDelay;
    this.options2 = {
      xAxis: {
        data: this.projectListName,
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

  private initChart3() {
    let data = this.projectStateNumber;
    this.options3 = {
      xAxis: {
        data: this.projectListState,
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
            color: '#4c6666',
          },
          emphasis: {
            itemStyle: {
              color: '#4c6666',
            }
          },
          data
        },
      ],
    };
  }

  onChartEvent(event: any, type: string) {
  }
}
