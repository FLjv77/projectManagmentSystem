import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-report-project',
  templateUrl: './chart-report-project.component.html',
  styleUrls: ['./chart-report-project.component.scss']
})
export class ChartReportProjectComponent implements OnInit {

  public isLoading = false;
  constructor() { }

  ngOnInit(): void {
    this.initoption1();
    this.initoption2();
    this.initChartIncome();
  }

  public option1: any;
  
  private initoption1() {
    this.option1 =  {
    xAxis: {
      type: 'category',
      data: ['فعالیت1', 'فعالیت2', 'فعالیت3', 'فعالیت4', 'فعالیت5', 'فعالیت6', 'فعالیت7']
    },
    yAxis: {
      type: 'value',
      name: 'درصد پیشرفت',
      data: [10,20,30,40,50,60,70,80,90,100]
    },
    series: [
      {
        data: [50, 75, 20, 30, 82, 10, 100],
        type: 'bar',
        showBackground: true,
        color: '#ffd519',
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
    }
  };

  public option2: any;
  
  private initoption2() {
    this.option2 = {
      
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 20, name: 'نیروی انسانی', itemStyle: {color: '#ffd519'} },
            { value: 80, name: 'زیر ساخت' , itemStyle: {color: '#AEAEAE'}},
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };  
  }

  public optionsIncome: any;
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
          name: 'پیشرفت پروژه',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [5, 10, 11, 18, 18, 20, 30],
          itemStyle: {color: '#ffd519'}
        },
        {
          name: 'تخصیص پروژه',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [10, 20, 25, 40, 40, 42, 45],
          itemStyle: {color: '#AEAEAE'}
        }
      ]
    };

  }

}