import { Component, OnInit } from '@angular/core';
import {DisplayPathModel} from "../../../../shared/model/displayPathModel";

@Component({
  selector: 'app-report-on-efficiency-for-organisation-manager',
  templateUrl: './report-on-efficiency-for-organisation-manager.component.html',
  styleUrls: ['./report-on-efficiency-for-organisation-manager.component.scss',
    '../../../../../assets/style/base.scss']
})
export class ReportOnEfficiencyForOrganisationManagerComponent implements OnInit {
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;

  constructor() { }

  public optionsCost: any;
  public optionsIncome: any;
  ngOnInit(): void {
    this.initDisplayPath();
    this.initChartIncome();
    this.initChartCost();
    this.initoption4();
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت گزارش', false, '');
    this.path2 = new DisplayPathModel('گزارش امور مالی', false, '');
  }

  public isLoading = false;
  private initChartIncome() {
    this.optionsIncome = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['شرکت-1', 'شرکت-2', 'شرکت-3', 'شرکت-4', 'شرکت-5']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'شرکت-1',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [120, 132, 101, 134, 90, 230, 210],
          itemStyle: {color: '#bb9900'}
        },
        {
          name: 'شرکت-2',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [220, 182, 191, 234, 290, 330, 310],
          itemStyle: {color: '#525252cc'}
        },
        {
          name: 'شرکت-3',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [150, 232, 201, 154, 190, 330, 410],
          itemStyle: {color: '#ffd519'}
        },
        {
          name: 'شرکت-4',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [320, 332, 301, 334, 390, 330, 320],
          itemStyle: {color: '#AEAEAE'}
        },
        {
          name: 'شرکت-5',
          type: 'line',
          stack: 'counts',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: { normal: {} },
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          itemStyle: {color: '#ffd000'}
        }
      ]
    };

  }

  private initChartCost() {
    this.optionsCost = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['شرکت-1', 'شرکت-2', 'شرکت-3', 'شرکت-4', 'شرکت-5']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'شرکت-1',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [320, 32, 171, 834, 290, 30, 210],
          itemStyle: {color: '#ffd000'}
        },
        {
          name: 'شرکت-2',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [20, 12, 11, 24, 20, 30, 10],
          itemStyle: {color: '#AEAEAE'}
        },
        {
          name: 'شرکت-3',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [50, 532, 101, 254, 90, 230, 310],
          itemStyle: {color: '#ffd519'}
        },
        {
          name: 'شرکت-4',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [20, 32, 1, 4, 30, 30, 20],
          itemStyle: {color: '#525252cc'}
        },
        {
          name: 'شرکت-5',
          type: 'line',
          stack: 'counts',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: { normal: {} },
          data: [80, 92, 101, 234, 190, 130, 320],
          itemStyle: {color: '#bb9900'} 
        }
      ]
    };

  }
  public option4: any;
  private initoption4() {
    this.option4 = {
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['product', 'پیشرفت زمانی', 'پشرفت اعلامی', 'پیشرفت تایید شده'],
          ['شرکت اول', 43.3, 85.8, 93.7],
          ['شرکت دوم', 83.1, 73.4, 55.1],
          ['شرکت سوم', 86.4, 65.2, 82.5],
          ['شرکت چهارم', 72.4, 53.9, 39.1]
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {name: 'درصد پیشرفت',},
      series: [{ type: 'bar',itemStyle: {color: '#AEAEAE'} }, { type: 'bar',itemStyle: {color: '#ffd519'} }, { type: 'bar' ,itemStyle: {color: '#525252cc'}}]
    };
  }
}