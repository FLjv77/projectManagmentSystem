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
    this.initoption1();
    this.initoption2();
    this.initoption3();
    this.initoption5();
    this.initoption4();
    this.initoption6();
    this.initoption7();
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
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'شرکت-2',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'شرکت-3',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: 'شرکت-4',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [320, 332, 301, 334, 390, 330, 320]
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
          data: [820, 932, 901, 934, 1290, 1330, 1320]
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
          data: [320, 32, 171, 834, 290, 30, 210]
        },
        {
          name: 'شرکت-2',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [20, 12, 11, 24, 20, 30, 10]
        },
        {
          name: 'شرکت-3',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [50, 532, 101, 254, 90, 230, 310]
        },
        {
          name: 'شرکت-4',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [20, 32, 1, 4, 30, 30, 20]
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
          data: [80, 92, 101, 234, 190, 130, 320]
        }
      ]
    };

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
        data: [50, 75, 20, 30, 22, 10, 80],
        type: 'bar',
        showBackground: true,
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
            { value: 1048, name: 'نیروی انسانی' },
            { value: 735, name: 'زیر ساخت' },
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

  public option3: any;
  
  private initoption3() {
    this.option3 = {
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['product', 'پیشرفت زمانی', 'پشرفت اعلامی', 'پیشرفت تایید شده'],
          ['پروژه اول', 43.3, 85.8, 93.7],
          ['پروژه دوم', 83.1, 73.4, 55.1],
          ['پروژه سوم', 86.4, 65.2, 82.5],
          ['پروژه چهارم', 72.4, 53.9, 39.1]
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {name: 'درصد پیشرفت',},
      series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
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
          ['فعالیت اول', 43.3, 85.8, 93.7],
          ['فعالیت دوم', 83.1, 73.4, 55.1],
          ['فعالیت سوم', 86.4, 65.2, 82.5],
          ['فعالیت چهارم', 72.4, 53.9, 39.1]
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {name: 'درصد پیشرفت',},
      series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
    };
  }

  public option5: any;
  
  private initoption5() {
    this.option5 = {
      title: {
        text: 'Stacked Line'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Email',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Union Ads',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Video Ads',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: 'Direct',
          type: 'line',
          stack: 'Total',
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: 'Search Engine',
          type: 'line',
          stack: 'Total',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };
  };

  public option6: any;
  
  private initoption6() {
    this.option6 = {
      xAxis: {
        data: ['نیروی انسانی', 'زیرساخت', 'کل']
      },
      yAxis: {},
      dataGroupId: '',
      animationDurationUpdate: 500,
      series: {
        type: 'bar',
        id: 'sales',
        data: [
          {
            value: 3,
            groupId: 'نیروی انسانی'
          },
          {
            value: 2,
            groupId: 'زیرساخت'
          },
          {
            value: 5,
            groupId: 'کل'
          }
        ],
        universalTransition: {
          enabled: true,
          divideShape: 'clone'
        }
      }
    };
    const drilldownData = [
      {
        dataGroupId: 'animals',
        data: [
          ['Cats', 4],
          ['Dogs', 2],
          ['Cows', 1],
          ['Sheep', 2],
          ['Pigs', 1]
        ]
      },
      {
        dataGroupId: 'fruits',
        data: [
          ['Apples', 4],
          ['Oranges', 2]
        ]
      },
      {
        dataGroupId: 'cars',
        data: [
          ['Toyota', 4],
          ['Opel', 2],
          ['Volkswagen', 2]
        ]
      }
    ];
  }

  private colors = ['#5470C6', '#EE6666'];

  public option7:any;

  private initoption7() {
    this.option7 = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {},
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          dataView: { readOnly: false },
          magicType: { type: ['line', 'bar'] },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر']
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value}میلیون'
        }
      },
      series: [
        {
          name: 'دریافتی پروژه',
          type: 'line',
          data: [2, 0, 5, 3, 2, 3, 6],
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }]
          }
        },
        {
          name: 'مانده پروژه',
          type: 'line',
          data: [0, 4, 2, 5, 4, 1, 3],
          markPoint: {
            data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
          },
          markLine: {
            data: [
              { type: 'average', name: 'Avg' },
              [
                {
                  symbol: 'none',
                  x: '90%',
                  yAxis: 'max'
                },
                {
                  symbol: 'circle',
                  label: {
                    position: 'start',
                    formatter: 'Max'
                  },
                  type: 'max',
                  name: '最高点'
                }
              ]
            ]
          }
        }
      ]
    };
}
}