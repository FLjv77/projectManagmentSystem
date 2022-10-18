import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-total-chart-for-company',
  templateUrl: './total-chart-for-company.component.html',
  styleUrls: ['./total-chart-for-company.component.scss',  '../../../../../projectManagement/page/chart-report-project/chart-report-project.component.scss']
})
export class TotalChartForCompanyComponent implements OnInit {
  public progressOfCompany: any;
  public doneProjectOfCompany: any;

  constructor(
    private router: Router
  ) { }

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
            backgroundColor: '#6a7985',
            labelTextStyle: {
              fontFamily: 'Vazir, Raymon, Arial, Helvetica, sans-serif',
              color:'#FFFFFF'
            },
          }
        }
      },
      legend: {
        data: ['پروژه-1', 'پروژه-2', 'پروژه-3', 'پروژه-4', 'پروژه-5']
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
          name: 'پروژه-1',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [5, 10, 11, 18, 18, 20, 30],
          itemStyle: {color: '#D1B6E1'}
        },
        {
          name: 'پروژه-2',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [10, 20, 25, 40, 40, 42, 45],
          itemStyle: {color: '#2a6364'}
        },
        {
          name: 'پروژه-3',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [60, 30, 25, 23, 20, 12, 15],
          itemStyle: {color: '#519D9E'}
        },
        {
          name: 'پروژه-4',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [25, 30, 34, 42, 48, 51, 57],
          itemStyle: {color: '#c1c1c1'}
        },
        {
          name: 'پروژه-5',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [5, 13, 11, 19, 17, 23, 19],
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
          data: ['متمم', 'درحال انجام','تکمیل شده'],
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
        data: [10, 5, 20],
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
