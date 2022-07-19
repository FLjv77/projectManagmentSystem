import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-chart-for-organization',
  templateUrl: './total-chart-for-organization.component.html',
  styleUrls: ['./total-chart-for-organization.component.scss', '../../../../../projectManagement/page/chart-report-project/chart-report-project.component.scss']
})
export class TotalChartForOrganizationComponent implements OnInit {
  public progressOfCompany: any;
  public doneProjectOfCompany: any;

  constructor() { }

  ngOnInit(): void {
    this.initChartDoneProjectOfCompany();
    this.initChartProgressOfCompany();
  }

  private initChartProgressOfCompany() {
    this.progressOfCompany = {
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
          data: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر']
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'درصد پیشرفت'
        }
      ],
      series: [
        {
          name: 'شرکت-1',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [5, 10, 11, 18, 18, 20, 30],
          itemStyle: {color: '#222222'}
        },
        {
          name: 'شرکت-2',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [10, 20, 25, 40, 40, 42, 45],
          itemStyle: {color: '#AEAEAE'}
        },
        {
          name: 'شرکت-3',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [60, 30, 25, 23, 20, 12, 15],
          itemStyle: {color: '#c1c1c1'}
        },
        {
          name: 'شرکت-3',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [40, 30, 25, 23, 20, 12, 15],
          itemStyle: {color: '#c1c1c1'}
        },
        {
          name: 'شرکت-4',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [25, 30, 34, 42, 48, 51, 57],
          itemStyle: {color: '#7c7c7c'}
        },
        {
          name: 'شرکت-5',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [5, 13, 11, 19, 17, 23, 19],
          itemStyle: {color: '#545454'}
        }
      ]
    };
  }


  private initChartDoneProjectOfCompany() {
    this.doneProjectOfCompany =  {
      color: ['#797777'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
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
          data: ['شرکت 7', 'شرکت 6', 'شرکت 5', 'شرکت 4', 'شرکت 3', 'شرکت 2', 'شرکت 1'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [{
        type: 'value'
      }],
      series: [{
        name: 'تعداد پروژه',
        type: 'bar',
        barWidth: '60%',
        data: [10, 5, 20, 34, 17, 30, 22]
      }]
    };
  }


}
