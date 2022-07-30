import { NumberFormaterService } from './../../../shared/service/number/number-formater.service';
import { DisplayPathModel } from './../../../shared/model/displayPathModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-report-project',
  templateUrl: './chart-report-project.component.html',
  styleUrls: ['./chart-report-project.component.scss']
})
export class ChartReportProjectComponent implements OnInit {

  public isLoading = false;
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public path3: DisplayPathModel;

  constructor(private numberFormaterService:NumberFormaterService) { }

  ngOnInit(): void {
    this.initoption1();
    this.initoption2();
    this.initChartIncome();
    this.initDisplayPath();
    this.initoption4();
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت شرکت', false, '');
    this.path2 = new DisplayPathModel('پروفایل شرکت', true, 'workspace/workSpaceProfile');
    this.path3 = new DisplayPathModel('نمودار ها', false, '');
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
        color: '#519D9E',
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        },
        label: {
          normal: {
            textStyle: {
              fontFamily: ' Vazir, Raymon, Arial, Helvetica, sans-serif',

            },
          },
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
            { value: 20, name: 'نیروی انسانی', itemStyle: {color: '#6fe5e7'} },
            { value: 80, name: 'زیر ساخت' , itemStyle: {color: '#D1B6E1'}},
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              fontFamily: ' Vazir, Raymon, Arial, Helvetica, sans-serif',
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
        data: ['شرکت-1', 'شرکت-2', 'شرکت-3', 'شرکت-4', 'شرکت-5'],
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
          itemStyle: {color: '#519D9E'}
        },
        {
          name: 'تخصیص پروژه',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [10, 20, 25, 40, 40, 42, 45],
          itemStyle: {color: '#2be3e5'}
        }
      ]
    };
  }

  public option4: any;

  private initoption4() {
    this.option4 = {
      legend: {
        textStyle: {
          fontFamily: ' Vazir, Raymon, Arial, Helvetica, sans-serif',
        }
      },
      tooltip: {},
      dataset: {
        source: [
          ['product', 'پیشرفت زمانی', 'پشرفت اعلامی', 'پیشرفت تایید شده'],
          ['فعالیت اول', 43.3, 85.8, 93.7],
          ['فعالیت دوم', 83.1, 73.4, 55.1],
          ['فعالیت سوم', 86.4, 65.2, 82.5],
          ['فعالیت چهارم', 72.4, 53.9, 39.1]
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {name: 'درصد پیشرفت',},
      series: [{ type: 'bar',itemStyle: {color: '#407a7a'} }, { type: 'bar',itemStyle: {color: '#46d5d7'} }, { type: 'bar' ,itemStyle: {color: '#D1B6E1'}}]
    };
  }

  public changeToPersian(num:string){
    return this.numberFormaterService.covertToFrNumber(num)
  }

}
