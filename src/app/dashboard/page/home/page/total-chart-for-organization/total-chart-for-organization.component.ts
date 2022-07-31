import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-total-chart-for-organization',
  templateUrl: './total-chart-for-organization.component.html',
  styleUrls: ['./total-chart-for-organization.component.scss',
  '../../../../../projectManagement/page/chart-report-project/chart-report-project.component.scss']
})
export class TotalChartForOrganizationComponent implements OnInit {
  public progressOfCompany: any;
  public doneProjectOfCompany: any;

  constructor(private router: Router) { }

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
        data: ['شرکت-1', 'شرکت-2', 'شرکت-3', 'شرکت-4'],
        textStyle: {
          fontFamily: ' Vazir, Raymon, Arial, Helvetica, sans-serif',
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
          boundaryGap: false,
          labelTextStyle: {
            fontFamily: 'Vazir, Raymon, Arial, Helvetica, sans-serif',
            color:'#FFFFFF'
          },
          data: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'],
        }
      ],
      yAxis: [
        {
          type: 'value',
          nameTextStyle: {
            fontFamily: ' Vazir, Raymon, Arial, Helvetica, sans-serif',
            fontWeight: 'bold'
          },
          name: 'ریال'
        }
      ],
      series: [
        {
          name: 'شرکت-1',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [705, 1000, 1100, 1800, 1008, 200, 930],
          itemStyle: {color: '#2a6364'}
        },
        {
          name: 'شرکت-2',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [1022, 2120, 1255, 2140, 1140, 2142, 1145],
          itemStyle: {color: '#519D9E'}
        },
        {
          name: 'شرکت-3',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [2240, 3110, 2511, 2325, 3210, 1211, 1115],
          itemStyle: {color: '#c1c1c1'}
        },
        {
          name: 'شرکت-4',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [255, 830, 934, 492, 888, 1151, 597],
          itemStyle: {color: '#28dadd'}
        }
      ]
    };
  }


  private initChartDoneProjectOfCompany() {
    this.doneProjectOfCompany =  {
      color: ['#519D9E'],
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
          },
          textStyle: {
            fontFamily: ' Vazir, Raymon, Arial, Helvetica, sans-serif',
          },
        }
      ],
      yAxis: [{
        type: 'value'
      }],
      series: [{
        name: 'تعداد پروژه',
        type: 'bar',
        barWidth: '60%',
        data: [10, 5, 20, 34, 17, 30, 22],
        textStyle: {
          fontFamily: ' Vazir, Raymon, Arial, Helvetica, sans-serif',
        },
      }]
    };
  }

  public goToAllChart() {
    this.router.navigate(['../../advancedSearch']);
  }
}
